import Header from "./components/Header/Header";
import Pathbar from "./components/Pathbar/Pathbar";
import ItemListCarrito from "./components/ItemListCarrito/ItemListCarrito";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header>
        <ItemListCarrito/>{}
      </Header>
      <Pathbar/>
    </div>
  );
}

export default App;
