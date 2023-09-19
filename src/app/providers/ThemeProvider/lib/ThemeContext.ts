import { createContext } from 'react';

export type ThemeType = 'light' | 'dark';

export interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  setTheme: function setTheme() {},
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
