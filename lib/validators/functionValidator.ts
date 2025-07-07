export interface FunctionValidationResult {
  isValid: boolean
  message: string
}

export const validateFunctionDefinitions = (code: string, requiredFunctions: string[]): FunctionValidationResult => {
  for (const func of requiredFunctions) {
    const funcPattern = new RegExp(`function\\s+${func.toLowerCase()}\\s*\\([^)]*\\)[\\s\\S]*?end`, "i")
    
    if (!funcPattern.test(code)) {
      return {
        isValid: false,
        message: `❌ Falta la función: ${func}\n💡 Estructura correcta:\nfunction ${func}(parámetros)\n  -- tu código aquí\n  return valor\nend`
      }
    }
  }
  
  return { isValid: true, message: "" }
}

export const validateFunctionReturns = (code: string, requiredFunctions: string[]): FunctionValidationResult => {
  for (const func of requiredFunctions) {
    const funcPattern = new RegExp(`function\\s+${func.toLowerCase()}\\s*\\([^)]*\\)[\\s\\S]*?end`, "i")
    const funcMatch = code.match(funcPattern)
    
    if (funcMatch && !funcMatch[0].toLowerCase().includes("return")) {
      return {
        isValid: false,
        message: `❌ La función ${func} debe tener 'return'\n💡 Las funciones deben devolver un valor usando 'return valor'`
      }
    }
  }
  
  return { isValid: true, message: "" }
}

export const validateFunctionCalls = (code: string, requiredFunctions: string[]): FunctionValidationResult => {
  for (const func of requiredFunctions) {
    const callPattern = new RegExp(`${func.toLowerCase()}\\s*\\(`, "i")
    
    if (!callPattern.test(code)) {
      return {
        isValid: false,
        message: `❌ Debes llamar la función ${func}\n💡 Usa: ${func}(parámetros) para ejecutar la función`
      }
    }
  }
  
  return { isValid: true, message: "" }
} 