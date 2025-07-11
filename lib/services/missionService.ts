import { Mission } from '../types/validationTypes'
import { validateUserCode } from '../validation/missionValidation';

export const  runMissionCode = (
  userCode: string, 
  mission: Mission, 
  setOutput: (output: string) => void
): void => {
  try {
    const validation = validateUserCode(userCode, mission);
    if (!validation.isValid) {
      setOutput(validation.message);
      return;
    }

    setOutput("¡Código ejecutado correctamente!"); 
    const progress = JSON.parse(localStorage.getItem("Bloxemy-progress") || "{}");
    progress[mission.id] = {
      ...(progress[mission.id] || {}),
      completed: true,
    };
    localStorage.setItem("Bloxemy-progress", JSON.stringify(progress));
  } catch (error) {
    setOutput(`Error inesperado: ${error instanceof Error ? error.message : String(error)}`);
  }
};


