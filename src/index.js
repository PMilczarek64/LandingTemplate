import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/fonts.css';
import 'font-awesome/css/font-awesome.min.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
