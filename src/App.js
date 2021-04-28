//import React, { useEffect } from "react";

//Paginas
// import Inicio from "./pages/Inicio";
// import Carrito from "./pages/Carrito";
// import Dermocosmetica from "./pages/Dermocosmetica";
// import Farmacia from "./pages/Farmacia";
// import Maquillaje from "./pages/Maquillaje";
// import Perfumeria from "./pages/Perfumeria";

//Componentes
import Header from "./components/Header/Header";
import ItemListCarrito from "./components/ItemListCarrito/ItemListCarrito";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App">
      {/* <Header />

      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/Carrito" component={Carrito} />
        <Route path="/Dermocosmetica" component={Dermocosmetica} />
        <Route path="/Farmacia" component={Farmacia} />
        <Route path="/Maquillaje" component={Maquillaje} />
        <Route path="/Perfumeria" component={Perfumeria} />
      </Switch> */}

      
    </div>
      <Header> {/*donde va? */}
        <ItemListCarrito/>
      </Header>
      <ItemListContainer/>
      <Footer />
    </div>
  );
}

export default App;
