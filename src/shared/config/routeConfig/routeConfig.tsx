import { RouteProps } from "react-router-dom";

import { MainPageLazy } from "pages/MainPage";
import { AboutPageLazy } from "pages/AboutPage";

export enum AppRoutesEnum {
  MAIN = 'main',
  ABOUT = 'about',
};

export const routePath: Record<AppRoutesEnum, string> = {
  [AppRoutesEnum.MAIN]: '/',
  [AppRoutesEnum.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutesEnum, RouteProps> = {
  [AppRoutesEnum.MAIN]: { path: routePath.main, element: <MainPageLazy />},
  [AppRoutesEnum.ABOUT]: { path: routePath.about, element: <AboutPageLazy /> },
}