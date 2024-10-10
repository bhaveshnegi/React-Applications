import { useState } from 'react';

const useStorage = (key, defaultValue = '', storageType = 'local') => {
  const storage = storageType === 'local' ? localStorage : sessionStorage;

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading storage:', error);
      return defaultValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      storage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting storage:', error);
    }
  };

  const removeValue = () => {
    try {
      storage.removeItem(key);
      setStoredValue(defaultValue);
    } catch (error) {
      console.error('Error removing storage item:', error);
    }
  };

  return [storedValue, setValue, removeValue];
};

export default useStorage;
