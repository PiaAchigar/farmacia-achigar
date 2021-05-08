//import React, { useEffect } from "react";
import React from 'react';
import './App.css';
//Routeador
import {BrowserRouter , Switch, Route} from 'react-router-dom';



//Componentes
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemListCarrito from "./components/ItemListCarrito/ItemListCarrito";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart"

//Los Links le pasan la info a los Routerse

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar>
          <ItemListCarrito/>
        </Navbar>
          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>
            <Route path="/category/:categoryId">
              <ItemListContainer/>
            </Route>
            <Route path="/item/:idProducto">
              <ItemDetailContainer/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
          </Switch>
        
        <Footer />
      </BrowserRouter>
  
  </div>

  );
}

export default App;

