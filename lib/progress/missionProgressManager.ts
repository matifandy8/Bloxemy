export interface MissionProgress {
  completed: boolean
  score: number
}

export interface ProgressData {
  [missionId: string]: MissionProgress
}

export const getMissionProgress = (): ProgressData => {
  if (typeof window === 'undefined') return {}
  return JSON.parse(localStorage.getItem("codemyblox-progress") || "{}")
}

export const saveMissionProgress = (missionId: string, progress: MissionProgress): void => {
  if (typeof window === 'undefined') return
  
  const currentProgress = getMissionProgress()
  currentProgress[missionId] = progress
  localStorage.setItem("codemyblox-progress", JSON.stringify(currentProgress))
}

export const completeMission = (missionId: string): void => {
  saveMissionProgress(missionId, { completed: true, score: 100 })
}

export const isMissionCompleted = (missionId: string): boolean => {
  const progress = getMissionProgress()
  return progress[missionId]?.completed || false
}

export const getMissionScore = (missionId: string): number => {
  const progress = getMissionProgress()
  return progress[missionId]?.score || 0
} 