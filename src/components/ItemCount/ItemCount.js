import "./ItemCount.scss";
//este comp va a una Card y la Card va a ItemListCarrito
import { useState, useEffect } from "react";
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
  useEffect(()=>{
    if(count < 1 || stock === 0){
      alert("Stock 0!")
      setCount(count) // si el contador ya llego a cero  o no hay stock el clic no tiene efecto
    }
  }, [count]);
  
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