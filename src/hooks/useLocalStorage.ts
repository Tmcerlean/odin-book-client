import { useState } from 'react';

const useLocalStorageState = <T>(key: string, defaultValue?: T): [T, (value: T) => void] => {
  const [state, internalSetState] = useState<T>(() => {
    try {
      const value = localStorage.getItem(key)
      if (value) return JSON.parse(value)
    } catch (error) {
      console.error(error);
    }

    return defaultValue;
  });

  const setLocalStorageState = (value: any) => {
    internalSetState(value)
    localStorage.setItem(key, JSON.stringify(value))
  };

  return [state, setLocalStorageState];
};

export { useLocalStorageState };