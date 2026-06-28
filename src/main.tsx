import 'tailwindcss/tailwind.css';
import './globalStyles.scss';

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {HelmetProvider} from 'react-helmet-async';
import {Toaster} from 'react-hot-toast';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
      <Toaster position="bottom-center" />
    </HelmetProvider>
  </StrictMode>,
);
