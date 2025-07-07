export interface VariableValidationResult {
  isValid: boolean
  message: string
}

export const validateVariableDeclarations = (code: string, requiredVariables: string[]): VariableValidationResult => {
  for (const variable of requiredVariables) {
    const varPattern = new RegExp(`local\\s+${variable.toLowerCase()}\\s*=\\s*[^\\n]+`, "i")
    
    if (!varPattern.test(code)) {
      return {
        isValid: false,
        message: `❌ Falta la variable: ${variable}\n💡 Recuerda usar: local ${variable} = valor\n📝 Asegúrate de asignarle un valor apropiado.`
      }
    }
  }
  
  return { isValid: true, message: "" }
}

export const validateVariableUsage = (code: string, requiredVariables: string[]): VariableValidationResult => {
  const printMatches = code.match(/print\s*\([^)]*\)/g) || []
  const usedVariables = requiredVariables.filter((variable: string) =>
    printMatches.some((print) => print.toLowerCase().includes(variable.toLowerCase()))
  )

  if (usedVariables.length < requiredVariables.length) {
    const missingVars = requiredVariables.filter((v: string) => !usedVariables.includes(v))
    return {
      isValid: false,
      message: `❌ Variables no utilizadas: ${missingVars.join(", ")}\n💡 Debes mostrar estas variables usando print() y concatenación (..)`
    }
  }
  
  return { isValid: true, message: "" }
} 