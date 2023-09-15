import { FC } from "react";

import { useRoutes } from "../hooks/useRoutes";
import { useTheme } from "../theme/hooks/useTheme";
import { Header } from "./Header/Header";
import { classNames } from "../helpers/classNames/classNames";
import '../styles/index.scss';

export const App: FC = () => {
  const routes = useRoutes();
  const { theme, themeHandler } = useTheme();
  return <div className={classNames('app', [theme])}>
    <Header theme={theme} themeHandler={themeHandler} />
    {routes}
  </div>
}; 
