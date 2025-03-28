import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './sass/styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
