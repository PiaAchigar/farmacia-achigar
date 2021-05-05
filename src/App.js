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

//Los Links le pasan la info a los Routers

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
          </Switch>
        
        <Footer />
      </BrowserRouter>
  
  </div>

  );
}

export default App;

