export interface PrintValidationResult {
  isValid: boolean
  message: string
}

export const validateRequiredPrints = (code: string, requiredCount: number): PrintValidationResult => {
  const printMatches = code.match(/print\s*\([^)]*\)/g) || []
  
  if (printMatches.length < requiredCount) {
    return {
      isValid: false,
      message: `❌ Necesitas exactamente ${requiredCount} comandos print(). Tienes ${printMatches.length}.\n💡 Cada print() debe mostrar información diferente.`
    }
  }
  
  return { isValid: true, message: "" }
}

export const validatePrintContent = (code: string, requiredContent: string[]): PrintValidationResult => {
  const printMatches = code.match(/print\s*\([^)]*\)/g) || []
  
  for (const content of requiredContent) {
    const hasContent = printMatches.some((print) => 
      print.toLowerCase().includes(content.toLowerCase())
    )
    
    if (!hasContent) {
      return {
        isValid: false,
        message: `❌ Falta información requerida: "${content}"\n💡 Asegúrate de incluir esta palabra en uno de tus print().`
      }
    }
  }
  
  return { isValid: true, message: "" }
} 