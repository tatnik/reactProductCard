import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/defaultTheme';
import App from './components/app/app';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App showInAccordion={true} />
    </React.StrictMode>
  </ThemeProvider>
);


