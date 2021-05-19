//import React, { useEffect } from "react";
import React from 'react';
import './App.scss';

//Routeador
import {BrowserRouter , Switch, Route} from 'react-router-dom';

//Componentes
import Cart from "./components/Cart/Cart"
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListCarrito from "./components/ItemListCarrito/ItemListCarrito";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

//Los Links le pasan la info a los Routerse

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar>
            <ItemListCarrito/>
          </Navbar>
            <Switch>
              <Route path="/category/:categoryId">
                <ItemListContainer/>
              </Route>
              <Route path="/item/:idProducto">
                <ItemDetailContainer/>
              </Route>
              <Route path="/cart/:codigoItem">
                <Cart/>
              </Route>
              <Route path="/">
                <ItemListContainer/>
              </Route>
            </Switch>
          
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;

