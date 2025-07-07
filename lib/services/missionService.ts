import { Mission } from '../types/validationTypes'
import { validateMissionCode } from '../validators/missionValidator'
import { validateBasicSyntax } from '../validators/syntaxValidator'
import { executeLuaCode } from '../executors/luaCodeExecutor'
import { completeMission } from '../progress/missionProgressManager'

export const runMissionCode = (
  userCode: string, 
  mission: Mission, 
  setOutput: (output: string) => void
): void => {
  console.log(userCode)
  
  try {
    const validation = validateMissionCode(userCode, mission.challenge.validation)

    if (!validation.isValid) {
      setOutput(`❌ Error de validación:\n${validation.message}\n\n💡 Revisa los requisitos y vuelve a intentar.`)
      return
    }

    const executionResult = executeLuaCode(userCode)
    const outputs = executionResult.outputs

    if (outputs.length === 0) {
      outputs.push(validation.message)
    } else {
      outputs.unshift("✅ Código validado correctamente!")
      outputs.push("")
      outputs.push("🎉 " + validation.message)
    }

    setOutput(outputs.join("\n"))
  } catch (error) {
    setOutput("❌ Error en el código. Revisa la sintaxis y vuelve a intentar.")
  }
}

export const validateSyntax = (
  userCode: string, 
  setOutput: (output: string) => void
): void => {
  const syntaxValidation = validateBasicSyntax(userCode)
  
  if (syntaxValidation.isValid) {
    setOutput("✅ No se encontraron errores básicos de sintaxis.\n\n💡 Tu código está listo para ejecutar.")
  } else {
    setOutput(`🔍 Validación de sintaxis:\n\n${syntaxValidation.message}`)
  }
}

export const completeMissionWithValidation = (
  userCode: string, 
  mission: Mission, 
  setOutput: (output: string) => void, 
  setIsCompleted: (completed: boolean) => void
): void => {
  const validation = validateMissionCode(userCode, mission.challenge.validation)

  if (!validation.isValid) {
    setOutput(
      `❌ No puedes completar la misión aún:\n${validation.message}\n\n💡 Completa todos los requisitos primero.`
    )
    return
  }

  completeMission(mission.id)
  setIsCompleted(true)
  setOutput(
    "🎉 ¡MISIÓN COMPLETADA!\n\n✅ Tu código cumple todos los requisitos.\n🏆 Has desbloqueado la siguiente misión.\n⭐ Puntos ganados: 100"
  )
} 