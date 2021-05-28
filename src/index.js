import React from 'react';
import ReactDOM from 'react-dom';
//Css
import './index.scss';
//Components
import App from './App';
import {CartProvider} from "./CartContext"

import { Provider } from "react-redux"

import { store } from "./state"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <App />
      </CartProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


