import { useState } from 'react';

const useLocalStorage = <T>(key: string, defaultValue?: T): [T, (value: T) => void] => {

  const [state, internalSetState] = useState<T>(() => {

    try {
      const value = localStorage.getItem(key)
      if (value) return JSON.parse(value)
    } catch (error) {
      console.error(error);
    }

    return defaultValue;
  });

  const setLocalStorage = (value: any) => {
    internalSetState(value)
    localStorage.setItem(key, JSON.stringify(value))
  };

  return [state, setLocalStorage];
};

export default useLocalStorage;