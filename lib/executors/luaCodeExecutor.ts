export interface CodeExecutionResult {
  outputs: string[]
  variables: { [key: string]: any }
}

export const parseVariableDeclaration = (line: string): { name: string; value: any } | null => {
  const varMatch = line.match(/local\s+(\w+)\s*=\s*(.+)/)
  
  if (!varMatch) return null
  
  const varName = varMatch[1]
  let value: any = varMatch[2].replace(/"/g, "").replace(/'/g, "")

  if (!isNaN(Number(value))) {
    value = Number(value)
  } else if (value === "true") {
    value = true
  } else if (value === "false") {
    value = false
  }

  return { name: varName, value }
}

export const parsePrintStatement = (line: string): string | null => {
  const printMatch = line.match(/print\s*\(\s*["'](.+?)["']\s*\)/)
  if (printMatch) {
    return printMatch[1]
  }
  
  return null
}

export const parseConcatenatedPrint = (line: string, variables: { [key: string]: any }): string | null => {
  const concatMatch = line.match(/print\s*\((.+?)\)/)
  if (!concatMatch) return null
  
  let content = concatMatch[1]

  Object.keys(variables).forEach((varName) => {
    const regex = new RegExp(varName, "g")
    content = content.replace(regex, String(variables[varName]))
  })

  content = content.replace(/\.\./g, " ").replace(/"/g, "").replace(/'/g, "")
  return content
}

export const executeLuaCode = (userCode: string): CodeExecutionResult => {
  const lines = userCode.split("\n")
  const outputs: string[] = []
  const variables: { [key: string]: any } = {}

  lines.forEach((line) => {
    const trimmedLine = line.trim()

    if (trimmedLine.startsWith("--") || trimmedLine === "") return

    const varResult = parseVariableDeclaration(trimmedLine)
    if (varResult) {
      variables[varResult.name] = varResult.value
      return
    }

    const printResult = parsePrintStatement(trimmedLine)
    if (printResult) {
      outputs.push(printResult)
      return
    }

    const concatResult = parseConcatenatedPrint(trimmedLine, variables)
    if (concatResult) {
      outputs.push(concatResult)
      return
    }

    if (trimmedLine.includes("if") && trimmedLine.includes("then")) {
      outputs.push("🔍 Evaluando condición...")
    }
  })

  return { outputs, variables }
} 