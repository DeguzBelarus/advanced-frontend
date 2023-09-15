import { FC } from "react";

import { useRoutes } from "./hooks/useRoutes";
import { Header } from "../components/Header/Header";
import { classNames } from "../shared/lib/classNames";
import { useTheme } from "./providers/ThemeProvider";
import './styles/index.scss';

export const App: FC = () => {
  const routes = useRoutes();
  const { theme, themeHandler } = useTheme();
  return <div className={classNames('app', [theme])}>
    <Header theme={theme} themeHandler={themeHandler} />
    {routes}
  </div>
}; 
