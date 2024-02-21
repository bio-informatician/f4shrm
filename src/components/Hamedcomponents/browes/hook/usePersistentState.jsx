// usePersistentState.js
import { useState } from 'react';

const usePersistentState = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  const initialValue = storedValue ? JSON.parse(storedValue) : defaultValue;
  const [value, setValue] = useState(initialValue);

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
};

export default usePersistentState;
