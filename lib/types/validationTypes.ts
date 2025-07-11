export interface ValidationResult {
  isValid: boolean
  message: string
}

export interface MissionValidation {
  requiredPrints?: number
  mustContain?: string[]
  requiredVariables?: string[]
  requiredFunctions?: string[]
  requireReturn?: boolean
  nestedLoops?: boolean
  requiredKeywords?: string[]
  customValidation?: (code: string) => ValidationResult
}

export interface MissionChallenge {
  validation: MissionValidation
}

export interface Mission {
  id: string
  title: string
  description: string
  challenge: MissionChallenge
  difficulty: string
  category: string
  available?: boolean;
} 