//import React, { useEffect } from "react";
import React from 'react';
import './App.css';
//Routeador
import {BrowserRouter , Switch, Route} from 'react-router-dom';

//Paginas
import Home from "./pages/Home";
import Carrito from "./pages/Carrito";
import Dermocosmetica from "./pages/Dermocosmetica";
import Farmacia from "./pages/Farmacia";
import Maquillaje from "./pages/Maquillaje";
import Perfumeria from "./pages/Perfumeria";
import Ofertas from "./pages/Ofertas";

//Componentes
import Navbar from "./components/Navbar/Navbar";
import ItemListCarrito from "./components/ItemListCarrito/ItemListCarrito";
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar>
          <ItemListCarrito/>
        </Navbar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/carrito" component={Carrito} />
            <Route path="/dermocosmetica" component={Dermocosmetica} />
            <Route path="/farmacia" component={Farmacia} />
            <Route path="/maquillaje" component={Maquillaje} />
            <Route path="/perfumeria" component={Perfumeria} />
            <Route path="/ofertas" component={Ofertas} />
          </Switch>
        
        <Footer />
      </BrowserRouter>
  
  </div>

  );
}

export default App;

