import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { product } from './mocks/mock';
import ProductPage from './pages/ProductPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductPage product={product} />
  </React.StrictMode>
);


