import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { MainPageLazy } from "../pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "../pages/AboutPage/AboutPage.lazy";

export const useRoutes = () => {
  return <Suspense fallback={<span>loading...</span>}>
    <Routes>
      <Route path="/about" element={<AboutPageLazy />}></Route>
      <Route path="/" element={<MainPageLazy />}></Route>
    </Routes>
  </Suspense>
};
