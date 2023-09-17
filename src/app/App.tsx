import { FC, Suspense } from "react";

import { classNames } from "../shared/lib/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Header } from "widgets/Header";
import { SideBar } from "widgets/SideBar";
import './styles/index.scss';

export const App: FC = () => {
  const { theme } = useTheme();
  return <div className={classNames('app', [theme])}>
    <Suspense fallback=''>
      <Header />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </Suspense>
  </div>
}; 
