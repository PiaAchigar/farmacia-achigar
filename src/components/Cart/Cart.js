import { useContext, useEffect } from "react";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";
import "./Cart.scss";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <div className="precio-total">
          Total: $
          {cart
            .map((i) => {
              return Number(i.precio) * Number(i.quantity);
            })
            .reduce((a, b) => a + b)}
        </div>
      ) : (
        <></>
      )}
      {cart.length > 0 ? (
        cart.map((item) => {
          return (
            <div className="container-product">
              <h1>
                {item.nombre} / {item.marca}
              </h1>
              <div key={item.codigo} className="container-data">
                <img src={item.foto} style={{ height: "10rem" }} alt="img" />
                <div className="item-description">
                  <p>Precio Unitario: {item.precio}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>
                    Subtotal: ${Number(item.precio) * Number(item.quantity)}
                  </p>
                </div>
                <span className="remove" onClick={(e) => removeItem(item.id)}>
                  ❌
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <p>Carrito Vacio</p>
      )}
      <div className="shop">
        <Link exact to={`/products`} className="seguir">
          Seguir comprando
        </Link>
        <Link exact to={`/purcheseOrder`}>
          Finalizar la Compra
        </Link>
      </div>
    </div>
  );
}
