import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme');
  const isEnabled = typeof enabledState === 'undefined' && enabled;

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    if (isEnabled) {
      bodyClass.add(className);
    } else {
      bodyClass.remove(className);
    }
  }, [enabled, isEnabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;
