import "./ItemCount.scss";
import { useState } from "react";

export default function ItemCount({ stock, add }) {
  const [count, setCount] = useState(1);
  const sumar = () => {
    if (count >= stock) {
      setCount(count);
    } else {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count <= 1) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="div-count">
      <div className="count">
        <button onClick={restar}>-</button>
        <h2>{count}</h2>
        <button onClick={sumar}>+</button>
      </div>
      <p>Stock:{stock}</p>
      <button className="btn-agregar" onClick={add} value={count}>
        Agregar
      </button>
    </div>
  );
}
