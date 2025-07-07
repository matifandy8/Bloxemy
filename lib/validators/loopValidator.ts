export interface LoopValidationResult {
  isValid: boolean
  message: string
}

export const validateNestedLoops = (code: string): LoopValidationResult => {
  const forMatches = code.match(/for\\s+\w+\\s*=\\s*\d+\\s*,\\s*\d+.*?do[\\s\\S]*?end/gi) || []
  
  if (forMatches.length < 2) {
    return {
      isValid: false,
      message: `❌ Necesitas al menos 2 loops for\n💡 Estructura:\nfor i = 1, 3 do\n  for j = 1, 2 do\n    -- código aquí\n  end\nend`
    }
  }

  let hasNestedLoop = false
  for (const loop of forMatches) {
    const innerForCount = (loop.match(/for\\s+\w+\\s*=/gi) || []).length
    if (innerForCount > 1) {
      hasNestedLoop = true
      break
    }
  }

  if (!hasNestedLoop) {
    return {
      isValid: false,
      message: `❌ Los loops deben estar anidados (uno dentro del otro)\n💡 El segundo loop debe estar DENTRO del primero`
    }
  }
  
  return { isValid: true, message: "" }
} 