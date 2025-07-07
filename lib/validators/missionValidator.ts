import { ValidationResult, MissionValidation } from '../types/validationTypes'
import { validateRequiredPrints, validatePrintContent } from './printValidator'
import { validateVariableDeclarations, validateVariableUsage } from './variableValidator'
import { validateFunctionDefinitions, validateFunctionReturns, validateFunctionCalls } from './functionValidator'
import { validateNestedLoops } from './loopValidator'
import { validateConditionalStatements, validateComparisonOperators } from './conditionalValidator'
import { validateBasicSyntax } from './syntaxValidator'

export const validateMissionCode = (code: string, validation: MissionValidation): ValidationResult => {
  if (!validation) {
    return { 
      isValid: false, 
      message: "No hay validación configurada" 
    }
  }

  const syntaxValidation = validateBasicSyntax(code)
  if (!syntaxValidation.isValid) {
    return syntaxValidation
  }

  if (validation.requiredPrints) {
    const printValidation = validateRequiredPrints(code, validation.requiredPrints)
    if (!printValidation.isValid) return printValidation

    if (validation.mustContain) {
      const contentValidation = validatePrintContent(code, validation.mustContain)
      if (!contentValidation.isValid) return contentValidation
    }
  }

  if (validation.requiredVariables) {
    const varDeclarationValidation = validateVariableDeclarations(code, validation.requiredVariables)
    if (!varDeclarationValidation.isValid) return varDeclarationValidation

    const varUsageValidation = validateVariableUsage(code, validation.requiredVariables)
    if (!varUsageValidation.isValid) return varUsageValidation
  }

  // Validate functions
  if (validation.requiredFunctions) {
    const funcDefinitionValidation = validateFunctionDefinitions(code, validation.requiredFunctions)
    if (!funcDefinitionValidation.isValid) return funcDefinitionValidation

    if (validation.requireReturn) {
      const funcReturnValidation = validateFunctionReturns(code, validation.requiredFunctions)
      if (!funcReturnValidation.isValid) return funcReturnValidation
    }

    const funcCallValidation = validateFunctionCalls(code, validation.requiredFunctions)
    if (!funcCallValidation.isValid) return funcCallValidation
  }

  // Validate nested loops
  if (validation.nestedLoops) {
    const loopValidation = validateNestedLoops(code)
    if (!loopValidation.isValid) return loopValidation
  }

  // Validate conditionals
  if (validation.requiredKeywords && validation.requiredKeywords.includes("if")) {
    const conditionalValidation = validateConditionalStatements(code)
    if (!conditionalValidation.isValid) return conditionalValidation

    if (validation.mustContain && validation.mustContain.includes(">=")) {
      const comparisonValidation = validateComparisonOperators(code)
      if (!comparisonValidation.isValid) return comparisonValidation
    }
  }



  if (validation.customValidation) {
    const customResult = validation.customValidation(code)
    if (!customResult.isValid) return customResult
  }

  

  return {
    isValid: true,
    message: "🎉 ¡Excelente! Tu código cumple todos los requisitos.\n✅ Misión completada correctamente.\n🏆 ¡Eres un verdadero programador!"
  }
} 