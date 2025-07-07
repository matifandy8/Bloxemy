// Re-export all functionality from the new modular structure
export { validateMissionCode as validateCode } from './validators/missionValidator'
export { runMissionCode as runCode } from './services/missionService'
export { completeMissionWithValidation as completeMission } from './services/missionService'

// Re-export types for backward compatibility
export type { ValidationResult, MissionValidation, Mission } from './types/validationTypes'
export type { MissionProgress, ProgressData } from './progress/missionProgressManager'
export type { CodeExecutionResult } from './executors/luaCodeExecutor'

// Re-export individual validators for direct use
export { validateRequiredPrints, validatePrintContent } from './validators/printValidator'
export { validateVariableDeclarations, validateVariableUsage } from './validators/variableValidator'
export { validateFunctionDefinitions, validateFunctionReturns, validateFunctionCalls } from './validators/functionValidator'
export { validateNestedLoops } from './validators/loopValidator'
export { validateConditionalStatements, validateComparisonOperators } from './validators/conditionalValidator'

// Re-export progress management functions
export { getMissionProgress, saveMissionProgress, isMissionCompleted, getMissionScore } from './progress/missionProgressManager'

// Re-export code execution functions
export { executeLuaCode, parseVariableDeclaration, parsePrintStatement, parseConcatenatedPrint } from './executors/luaCodeExecutor' 