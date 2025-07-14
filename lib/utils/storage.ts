import { STORAGE_KEYS } from '../constants';

export interface StorageData {
  [key: string]: any;
}

export const getStorageItem = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading from localStorage (${key}):`, error);
    return defaultValue;
  }
};

export const setStorageItem = <T>(key: string, value: T): boolean => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error writing to localStorage (${key}):`, error);
    return false;
  }
};

export const removeStorageItem = (key: string): boolean => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing from localStorage (${key}):`, error);
    return false;
  }
};

export const clearStorage = (): boolean => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
};

export const getProgress = (): StorageData => {
  return getStorageItem(STORAGE_KEYS.PROGRESS, {});
};

export const setProgress = (progress: StorageData): boolean => {
  return setStorageItem(STORAGE_KEYS.PROGRESS, progress);
};

export const getCompleted = (): StorageData => {
  return getStorageItem(STORAGE_KEYS.COMPLETED, {});
};

export const setCompleted = (completed: StorageData): boolean => {
  return setStorageItem(STORAGE_KEYS.COMPLETED, completed);
}; 