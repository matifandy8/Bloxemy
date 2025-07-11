import missionsData from "@/lib/missionsData";

type ValidationResult = { isValid: boolean; message: string };
export type MissionId = keyof typeof missionsData;

export type Mission = {
  id: MissionId;
};

function removeLuaComments(code: string): string {
  return code
    .split('\n')
    .map(line => {
      const idx = line.indexOf('--');
      return idx !== -1 ? line.slice(0, idx) : line;
    })
    .join('\n');
}

function extractPrints(code: string): string[] {
  const regex = /print\s*\(([^)]*)\)/g;
  const prints = [];
  let match;
  while ((match = regex.exec(code)) !== null) {
    prints.push(match[1].trim());
  }
  return prints;
}

export const validateUserCode = (
  userCode: string,
  mission: Mission
): ValidationResult => { 
  const missionData = missionsData[mission.id];
  if (!missionData || !missionData.challenge || !missionData.challenge.validation) {
    return { isValid: true, message: "" }; 
  }

  const validation = missionData.challenge.validation;

  const codeWithoutComments = removeLuaComments(userCode);

  // Validación general: detectar strings sin cerrar
  const lines = codeWithoutComments.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Contar comillas dobles y simples
    const doubleQuotes = (line.match(/"/g) || []).length;
    const singleQuotes = (line.match(/'/g) || []).length;
    if (doubleQuotes % 2 !== 0 || singleQuotes % 2 !== 0) {
      return {
        isValid: false,
        message: `❌ Tienes un string sin cerrar en la línea ${i + 1}. Asegúrate de poner comillas dobles (") o simples (') al inicio y al final de cada texto.`,
      };
    }
  }

  if ("requiredPrints" in validation && typeof validation.requiredPrints === "number") {
    const printOpenRegex = /print\s*\([^)]*$/gm;
    if (printOpenRegex.test(codeWithoutComments)) {
      return {
        isValid: false,
        message: "❌ Tienes un print() sin cerrar. Asegúrate de poner el paréntesis de cierre ) en cada print().",
      };
    }
    const prints = extractPrints(codeWithoutComments);
    if (prints.length !== validation.requiredPrints) {
      return {
        isValid: false,
        message: `❌ Debes tener exactamente ${validation.requiredPrints} print(). Tienes: ${prints.length}`,
      };
    }
    const hasEmptyPrints = prints.some((p) => p === '' || p === '""' || p === "''");
    if (hasEmptyPrints) {
      return {
        isValid: false,
        message: "❌ No dejes prints vacíos\n💡 Cada print() debe tener información válida, no cadenas vacías",
      };
    }
  }

  if (validation.mustContain) {
    for (const word of validation.mustContain) {
      if (!codeWithoutComments.includes(word)) {
        return {
          isValid: false,
          message: `❌ Tu código debe contener la palabra: "${word}"`,
        };
      }
    }
  }

  if ("customValidation" in validation && typeof validation.customValidation === "function") {
    const result = validation.customValidation(codeWithoutComments);
    if (!result.isValid) {
      return result;
    }
  }

  return { isValid: true, message: "¡Código válido! Puedes ejecutar tu solución." };
}; 