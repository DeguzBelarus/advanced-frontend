import { FC, JSXElementConstructor, ReactElement, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeType } from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType || 'light';

interface Props {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;