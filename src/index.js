import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { product } from './mocks/mock';
import ProductPage from './pages/ProductPage';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/defaultTheme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <ProductPage product={product} />
    </React.StrictMode>
  </ThemeProvider>
);


