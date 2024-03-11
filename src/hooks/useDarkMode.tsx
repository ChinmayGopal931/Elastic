import { useState, useEffect } from 'react';
import { useDarkMode as useIsDarkMode } from 'usehooks-ts';

const useDarkMode = (): [boolean, (mode: 'light' | 'dark') => void] => {
  const { isDarkMode, toggle } = useIsDarkMode();

  const setMode = (mode: 'light' | 'dark') => {
    // Tailwindcss dark mode toggler
    document.documentElement.className = mode;

    localStorage.setItem('theme', mode);
    // usehooks-ts dark mode toggler
    toggle();
  };

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    // Add or remove scrollbar classes based on the mode
    if (isDarkMode) {
      document.documentElement.classList.add('dark-scrollbar');
      document.documentElement.classList.remove('light-scrollbar');
    } else {
      document.documentElement.classList.add('light-scrollbar');
      document.documentElement.classList.remove('dark-scrollbar');
    }
  }, [isDarkMode]);

  return [isDarkMode, setMode];
};

export default useDarkMode;
