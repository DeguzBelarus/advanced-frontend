import { type FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route path={path} element={<div className="page-wrapper">{element}</div>} key={path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
