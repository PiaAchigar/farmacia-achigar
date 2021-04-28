import "./ItemCount.scss";
//este comp va a ir insertado en ItemDetalis y si preciona "Agregar" va a ItemListCarrito
import { useState } from "react";
//import ProductosJson from "../../productos.json";

//Lo llama ItemListCarrito
export default function ItemCount( stock, initial){
  
  const [count , setCount] = useState(1);
  const sumar = () =>{
    if(count >= stock){
      setCount(count)
    }else{
      setCount(count + 1);
    }
  };
  const restar = () =>{
    setCount(count -1);
  };
  
  function onAdd(value){
      //debo enviar la cantidad seleccionada por el usuario, no me doy cuenta como
      //const cantSelected = value 
  }


  return(
      <div>
        <div className="count">
          <button onClick={restar}>-</button>
          <h2>{count}</h2>
          <button onClick={sumar}>+</button>
        </div>
         <button onClick={onAdd} value = {count}>Agregar</button>
      </div>
  )
}