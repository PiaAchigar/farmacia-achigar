import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../CartContext";
import { Link, useParams } from "react-router-dom";

import { useSelector } from "react-redux";

export default function ItemDetail() {
  const { idProducto } = useParams();
  const { addToCart } = useContext(CartContext);
  let [isClecked, setIsClicked] = useState(true);

  function onAdd(event) {
    const cantProducts = event.target.value;
    addToCart(product, cantProducts);
    setIsClicked(false);
  }

  const product = useSelector((state) =>
    state.products.find((p) => p.id === idProducto)
  );
  return (
    <div className="div-itemDetail">
      <img src={product.foto} style={{ height: "10rem" }} alt="img" />
      <h3>{product?.marca}</h3>
      <h3>{product?.nombre}</h3>
      <h4>{product?.descripcion}</h4>

      {isClecked ? (
        <>
          {product?.tamanio}----${product?.precio}
          <ItemCount stock={product?.stock} add={onAdd} />
        </>
      ) : (
        <>
          <Link to="/cart" className="link-item">
            <span className="btn-ir">Ir al Carrito</span>
          </Link>
        </>
      )}
    </div>
  );
}

//https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs
//https://www.youtube.com/watch?v=wF0drGBIZ_k
//https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs
