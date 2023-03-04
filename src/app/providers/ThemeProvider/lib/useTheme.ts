import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface IUseTheme {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): IUseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { setItem } = localStorage;

  const toggleTheme = () => {
    const nextTheme = theme === Theme.DARK
      ? Theme.LIGHT
      : Theme.DARK;

    setTheme(nextTheme);
    setItem(LOCAL_STORAGE_THEME_KEY, nextTheme);
  }

  return {
    theme,
    toggleTheme
  }
}
