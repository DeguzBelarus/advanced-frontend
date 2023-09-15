import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { MainPageLazy } from "pages/MainPage";
import { AboutPageLazy } from "pages/AboutPage";

export const useRoutes = () => {
  return <Suspense fallback={<span>loading...</span>}>
    <Routes>
      <Route path="/about" element={<AboutPageLazy />}></Route>
      <Route path="/" element={<MainPageLazy />}></Route>
    </Routes>
  </Suspense>
};
