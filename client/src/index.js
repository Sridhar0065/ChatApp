import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {CssBaseline} from '@mui/material';
import {HelmetProvider} from 'react-helmet-async'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <CssBaseline/>
    <App />
    </HelmetProvider>
  </React.StrictMode>
);


