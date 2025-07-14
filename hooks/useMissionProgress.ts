import { useState, useEffect, useCallback } from 'react';
import { getProgress, setProgress, getCompleted, setCompleted, clearStorage } from '@/lib/utils/storage';

interface MissionProgress {
  code?: string;
  completed?: boolean;
}

interface UseMissionProgressReturn {
  progress: Record<string, MissionProgress>;
  completed: Record<string, boolean>;
  saveCode: (missionId: string, code: string) => void;
  markCompleted: (missionId: string) => void;
  isCompleted: (missionId: string) => boolean;
  getMissionProgress: (missionId: string) => MissionProgress;
  clearProgress: () => void;
}

export function useMissionProgress(): UseMissionProgressReturn {
  const [progress, setProgressState] = useState<Record<string, MissionProgress>>({});
  const [completed, setCompletedState] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const loadProgress = () => {
      try {
        const storedProgress = getProgress();
        const storedCompleted = getCompleted();
        
        setProgressState(storedProgress);
        setCompletedState(storedCompleted);
      } catch (error) {
        console.error('Error loading mission progress:', error);
      }
    };

    loadProgress();
  }, []);

  const saveCode = useCallback((missionId: string, code: string) => {
    try {
      const updatedProgress = {
        ...progress,
        [missionId]: {
          ...progress[missionId],
          code,
        },
      };
      
      setProgressState(updatedProgress);
      setProgress(updatedProgress);
    } catch (error) {
      console.error('Error saving mission code:', error);
    }
  }, [progress]);

  const markCompleted = useCallback((missionId: string) => {
    try {
      const updatedProgress = {
        ...progress,
        [missionId]: {
          ...progress[missionId],
          completed: true,
        },
      };
      
      const updatedCompleted = {
        ...completed,
        [missionId]: true,
      };
      
      setProgressState(updatedProgress);
      setCompletedState(updatedCompleted);
      
      setProgress(updatedProgress);
      setCompleted(updatedCompleted);
    } catch (error) {
      console.error('Error marking mission as completed:', error);
    }
  }, [progress, completed]);

  const isCompleted = useCallback((missionId: string): boolean => {
    return Boolean(completed[missionId]);
  }, [completed]);

  const getMissionProgress = useCallback((missionId: string): MissionProgress => {
    return progress[missionId] || {};
  }, [progress]);

  const clearProgress = useCallback(() => {
    try {
      setProgressState({});
      setCompletedState({});
      clearStorage();
    } catch (error) {
      console.error('Error clearing progress:', error);
    }
  }, []);

  return {
    progress,
    completed,
    saveCode,
    markCompleted,
    isCompleted,
    getMissionProgress,
    clearProgress,
  };
} 