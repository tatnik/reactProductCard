import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { product } from './mock';
import ProductPage from './product-page';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductPage product={product} />
  </React.StrictMode>
);


