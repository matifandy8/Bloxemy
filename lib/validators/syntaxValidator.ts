import { ValidationResult } from '../types/validationTypes'

export interface SyntaxError {
  type: 'unclosed_parens' | 'unclosed_brackets' | 'assignment_vs_comparison' | 'missing_end' | 'unclosed_string'
  line?: number
  message: string
  suggestion?: string
}

export const validateBasicSyntax = (code: string): ValidationResult => {

  const errors: SyntaxError[] = []
  const lines = code.split('\n')

  // Check for unclosed parentheses
  const parensStack: { char: string; line: number }[] = []
  const bracketsStack: { char: string; line: number }[] = []
  const stringStack: { char: string; line: number }[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const lineNumber = i + 1

    // Check for unclosed parentheses and brackets
    for (let j = 0; j < line.length; j++) {
      const char = line[j]
      
      // Handle parentheses
      if (char === '(') {
        parensStack.push({ char: '(', line: lineNumber })
      } else if (char === ')') {
        if (parensStack.length === 0) {
          errors.push({
            type: 'unclosed_parens',
            line: lineNumber,
            message: `Paréntesis de cierre ')' sin paréntesis de apertura correspondiente en la línea ${lineNumber}`,
            suggestion: 'Revisa si tienes un paréntesis de cierre extra'
          })
        } else {
          parensStack.pop()
        }
      }

      // Handle brackets
      if (char === '{') {
        bracketsStack.push({ char: '{', line: lineNumber })
      } else if (char === '}') {
        if (bracketsStack.length === 0) {
          errors.push({
            type: 'unclosed_brackets',
            line: lineNumber,
            message: `Llave de cierre '}' sin llave de apertura correspondiente en la línea ${lineNumber}`,
            suggestion: 'Revisa si tienes una llave de cierre extra'
          })
        } else {
          bracketsStack.pop()
        }
      }

      // Handle strings (basic check)
      if (char === '"' || char === "'") {
        if (stringStack.length === 0 || stringStack[stringStack.length - 1].char !== char) {
          stringStack.push({ char, line: lineNumber })
        } else {
          stringStack.pop()
        }
      }
    }

    // Check for assignment vs comparison errors in Lua (no parentheses needed)
    const assignmentPattern = /\b(if|while|for)\s+[^=]*=\s*[^=]*\b/g
    const matches = line.match(assignmentPattern)
    if (matches) {
      errors.push({
        type: 'assignment_vs_comparison',
        line: lineNumber,
        message: `Uso incorrecto de '=' en lugar de '==' en la línea ${lineNumber}`,
        suggestion: 'En condiciones (if, while, for) debes usar == para comparar, no ='
      })
    }

    // Check for function without end
    if (line.trim().startsWith('function')) {
      const functionName = line.trim().match(/function\s+(\w+)/)
      if (functionName && !code.includes('end')) {
        errors.push({
          type: 'missing_end',
          line: lineNumber,
          message: `Función '${functionName[1]}' declarada en la línea ${lineNumber} pero falta 'end'`,
          suggestion: 'Toda función debe terminar con la palabra clave end'
        })
      }
    }

    // Check for if/while/for without end
    if (line.trim().startsWith('if') || line.trim().startsWith('while') || line.trim().startsWith('for')) {
      const structureType = line.trim().match(/^(if|while|for)/)?.[1]
      if (structureType && !code.includes('end')) {
        errors.push({
          type: 'missing_end',
          line: lineNumber,
          message: `Estructura '${structureType}' en la línea ${lineNumber} pero falta 'end'`,
          suggestion: 'Toda estructura de control debe terminar con la palabra clave end'
        })
      }
    }
  }

  // Check for unclosed parentheses at the end
  if (parensStack.length > 0) {
    const lastParen = parensStack[parensStack.length - 1]
    errors.push({
      type: 'unclosed_parens',
      line: lastParen.line,
      message: `Paréntesis de apertura '(' sin cerrar desde la línea ${lastParen.line}`,
      suggestion: 'Agrega un paréntesis de cierre ) para cerrar la expresión'
    })
  }

  // Check for unclosed brackets at the end
  if (bracketsStack.length > 0) {
    const lastBracket = bracketsStack[bracketsStack.length - 1]
    errors.push({
      type: 'unclosed_brackets',
      line: lastBracket.line,
      message: `Llave de apertura '{' sin cerrar desde la línea ${lastBracket.line}`,
      suggestion: 'Agrega una llave de cierre } para cerrar el bloque'
    })
  }

  // Check for unclosed strings at the end
  if (stringStack.length > 0) {
    const lastString = stringStack[stringStack.length - 1]
    errors.push({
      type: 'unclosed_string',
      line: lastString.line,
      message: `Cadena de texto sin cerrar desde la línea ${lastString.line}`,
      suggestion: 'Agrega comillas de cierre para cerrar la cadena de texto'
    })
  }

  if (errors.length > 0) {
    const errorMessages = errors.map(error => 
      `❌ ${error.message}${error.suggestion ? `\n💡 Sugerencia: ${error.suggestion}` : ''}`
    ).join('\n\n')

    return {
      isValid: false,
      message: `🔍 Se encontraron errores de sintaxis:\n\n${errorMessages}\n\n📝 Revisa tu código y corrige estos errores antes de continuar.`
    }
  }

  return {
    isValid: true,
    message: "✅ No se encontraron errores básicos de sintaxis"
  }
}

// Helper function to get detailed syntax analysis
export const getSyntaxAnalysis = (code: string): { errors: SyntaxError[], warnings: string[] } => {
  const validation = validateBasicSyntax(code)
  const warnings: string[] = []

  // Additional warnings for common beginner mistakes
  if (code.includes('print(') && !code.includes('print(')) {
    warnings.push("💡 Asegúrate de cerrar todos los paréntesis en las funciones print()")
  }

  if (code.includes('if') && code.includes('=') && !code.includes('==')) {
    warnings.push("💡 Recuerda usar == para comparaciones, no =")
  }

  if (code.includes('function') && !code.includes('end')) {
    warnings.push("💡 No olvides cerrar las funciones con 'end'")
  }

  return {
    errors: validation.isValid ? [] : [], // We'll need to modify this to return actual errors
    warnings
  }
} 