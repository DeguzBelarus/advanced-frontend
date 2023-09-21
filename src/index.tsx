import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/App';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import './shared/config/i18n/i18n';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);
const app = (
  <BrowserRouter>
    <Suspense fallback={''}>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </Suspense>
  </BrowserRouter>
);
root.render(app);
