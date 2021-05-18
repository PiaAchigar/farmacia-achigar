import "./ItemCount.scss";
//este comp va a ir insertado en ItemDetalis y si preciona "Agregar" va a ItemListCarrito
import { useState } from "react";
//import ProductosJson from "../../productos.json";


//sacar todo de aca y llevarlo a itemDetail / capturo el numero seleccionado con el context number = useState q esta en CartContext
export default function ItemCount( {stock, add}){
 
  //console.log(props)
  const [count , setCount] = useState(1);
  const sumar = () =>{
    if(count >= stock){
      setCount(count)
    }else{
      setCount(count + 1)
    }
  };
  const restar = () =>{
    if(count<= 1){
      setCount(count)
    }else{
      setCount(count -1)
    }
  };

  return(
      <div className="div-count">
        <div className="count">
          <button onClick={restar}>-</button>
          <h2>{count}</h2>
          <button onClick={sumar}>+</button>
        </div>
        <p>Stock:{stock}</p>
         <button className="btn-agregar" onClick={add} value = {count}>Agregar</button>
      </div>
  )
}