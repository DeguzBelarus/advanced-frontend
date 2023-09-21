import { type RouteProps } from 'react-router-dom';

import { MainPageLazy } from 'pages/MainPage';
import { AboutPageLazy } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutesEnum {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const routePath: Record<AppRoutesEnum, string> = {
  [AppRoutesEnum.MAIN]: '/',
  [AppRoutesEnum.ABOUT]: '/about',
  [AppRoutesEnum.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutesEnum, RouteProps> = {
  [AppRoutesEnum.MAIN]: { path: routePath.main, element: <MainPageLazy /> },
  [AppRoutesEnum.ABOUT]: { path: routePath.about, element: <AboutPageLazy /> },
  [AppRoutesEnum.NOT_FOUND]: { path: routePath.not_found, element: <NotFoundPage /> },
};
