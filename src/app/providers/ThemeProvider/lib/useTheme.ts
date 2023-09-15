import { useContext } from "react";

import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeType } from "./ThemeContext";

export interface IUseThemeResult {
  theme: ThemeType;
  themeHandler: () => void;
}

export const useTheme = (): IUseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)
  const themeHandler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }
  return {theme, themeHandler}
};
