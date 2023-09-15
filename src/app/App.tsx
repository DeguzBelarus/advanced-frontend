import { FC } from "react";

import { classNames } from "../shared/lib/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Header } from "widgets/Header";
import './styles/index.scss';

export const App: FC = () => {
  const { theme, themeHandler } = useTheme();
  return <div className={classNames('app', [theme])}>
    <Header theme={theme} themeHandler={themeHandler} />
    <AppRouter />
  </div>
}; 
