import "./ItemCount.scss";
//este comp va a una Card y la Card va a ItemListCarrito
import { useState, useEffect } from "react";


export default function ItemCount( stock, initial, onAdd){
  const [count , setCount] = useState(1);
  const sumar = ()=>{
    setCount(count + 1);
  };
  const restar = () =>{
    setCount(count -1);
  };
  useEffect(()=>{
    if(count < 1){
      alert("Stock 0!")
    }
  }, [count]);
  return(
      <div className="count">
        <button onClick={restar}>-</button>
        <h2>{count}</h2>
        <button onClick={sumar}>+</button>
      </div>
  )
}