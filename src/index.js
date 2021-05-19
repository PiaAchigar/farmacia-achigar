import React from 'react';
import ReactDOM from 'react-dom';
//Css
import './index.scss';
//Components
import App from './App';
import {CartProvider} from "./CartContext"

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


