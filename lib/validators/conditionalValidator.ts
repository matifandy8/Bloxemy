export interface ConditionalValidationResult {
  isValid: boolean
  message: string
}

export const validateConditionalStatements = (code: string): ConditionalValidationResult => {
  const ifMatches = code.match(/if\\s+[^then]+then[\\s\\S]*?end/gi) || []
  
  if (ifMatches.length === 0) {
    return {
      isValid: false,
      message: `❌ Falta estructura condicional\n💡 Usa: if condición then\n  -- código\nend`
    }
  }
  
  return { isValid: true, message: "" }
}

export const validateComparisonOperators = (code: string): ConditionalValidationResult => {
  const ifMatches = code.match(/if\\s+[^then]+then[\\s\\S]*?end/gi) || []
  const hasComparison = ifMatches.some((ifBlock) => />=|<=|>|<|==|~=/.test(ifBlock))
  
  if (!hasComparison) {
    return {
      isValid: false,
      message: `❌ Faltan operadores de comparación\n💡 Usa: >=, <=, >, <, ==, ~= en tus condiciones`
    }
  }
  
  return { isValid: true, message: "" }
} 