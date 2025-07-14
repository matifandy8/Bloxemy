import { Mission } from '../types/validationTypes';
import { validateUserCode } from '../validation/missionValidation';
import { STORAGE_KEYS } from '../constants';

interface MissionProgress {
  code?: string;
  completed?: boolean;
}

interface MissionValidationResult {
  isValid: boolean;
  message: string;
}

interface MissionExecutionResult {
  success: boolean;
  message: string;
  progress?: MissionProgress;
}

const getStoredProgress = (): Record<string, MissionProgress> => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || "{}");
  } catch (error) {
    console.error("Error reading progress from localStorage:", error);
    return {};
  }
};

const saveProgress = (missionId: string, progress: MissionProgress): void => {
  try {
    const storedProgress = getStoredProgress();
    storedProgress[missionId] = {
      ...storedProgress[missionId],
      ...progress,
    };
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(storedProgress));
  } catch (error) {
    console.error("Error saving progress to localStorage:", error);
  }
};

const validateMissionCode = (userCode: string, mission: Mission): MissionValidationResult => {
  try {
    const validation = validateUserCode(userCode, mission);
    return {
      isValid: validation.isValid,
      message: validation.message,
    };
  } catch (error) {
    return {
      isValid: false,
      message: `Error de validación: ${error instanceof Error ? error.message : String(error)}`,
    };
  }
};

const markMissionAsCompleted = (missionId: string): void => {
  try {
    const completed = JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPLETED) || "{}");
    completed[missionId] = true;
    localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(completed));
  } catch (error) {
    console.error("Error marking mission as completed:", error);
  }
};

export const executeMissionCode = (
  userCode: string, 
  mission: Mission, 
  onOutput: (output: string) => void
): MissionExecutionResult => {
  try {
    const validation = validateMissionCode(userCode, mission);
    
    if (!validation.isValid) {
      onOutput(validation.message);
      return {
        success: false,
        message: validation.message,
      };
    }

    saveProgress(mission.id, {
      code: userCode,
      completed: true,
    });

    markMissionAsCompleted(mission.id);

    const successMessage = "¡Código ejecutado correctamente!";
    onOutput(successMessage);

    return {
      success: true,
      message: successMessage,
      progress: {
        code: userCode,
        completed: true,
      },
    };
  } catch (error) {
    const errorMessage = `Error inesperado: ${error instanceof Error ? error.message : String(error)}`;
    onOutput(errorMessage);
    
    return {
      success: false,
      message: errorMessage,
    };
  }
};

export const getMissionProgress = (missionId: string): MissionProgress => {
  const progress = getStoredProgress();
  return progress[missionId] || {};
};

export const isMissionCompleted = (missionId: string): boolean => {
  try {
    const completed = JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPLETED) || "{}");
    return Boolean(completed[missionId]);
  } catch (error) {
    console.error("Error checking mission completion:", error);
    return false;
  }
};

export const saveMissionCode = (missionId: string, code: string): void => {
  saveProgress(missionId, { code });
};

export const runMissionCode = (
  userCode: string, 
  mission: Mission, 
  setOutput: (output: string) => void
): void => {
  executeMissionCode(userCode, mission, setOutput);
};


