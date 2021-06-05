import "./PurchaseOrder.scss";
import { useState, useContext } from "react";
import { getFirestore } from "../../firebase";
import firebase from "firebase";

import { CartContext } from "../../CartContext";
const db = getFirestore();

export default function Purchaseorder() {
  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const { cart, clean } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const newOrder = async () => {
    try {
      if (
        !buyerName.trim().length ||
        !buyerPhone.trim().length ||
        !buyerEmail.trim().length
      ) {
        setMessage("* campos obligatorios");
        return;
      }
      setLoading(true);
      const order = {
        buyer: {
          name: buyerName,
          phone: buyerPhone,
          email: buyerEmail,
        },
        items: cart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: cart.reduce(
          //current es el item en el q esta parado, prev es el acumulador
          (prev, current) =>
            Number(prev) + Number(current.precio) * Number(current.quantity),
          0
        ),
      };
      const orderRest = await db.collection("orders").add(order);

      // ejecutar transaccion (no es lo mejor) -> ver onCreate Cloud Functions
      for await (let item of cart) {
        await db
          .collection("items")
          .doc(item.id)
          .update({ stock: item.stock - item.quantity });
      }
      clean();
      setBuyerEmail("");
      setBuyerName("");
      setBuyerPhone("");
      setMessage("Su orden fue enviada con éxito! Orden ID:" + orderRest.id);
      setLoading(false);
    } catch (error) {
      setMessage(
        "Hubo un error al enviar su orden por favor intente mas tarde, gracias."
      );
      console.log(error);
    }
  };
  return (
    <div className="purchaseOrder-wrapper">
      <h1>Orden de Compra</h1>
      <div className="description">
        {cart.length > 0 ? (
          cart.map((item, key) => {
            return (
              <div className="item-countainer">
                <h2>
                  {item.nombre} / {item.marca}
                </h2>
                <img src={item.foto} style={{ height: "5rem" }} alt="img" />
                <div className="item-description">
                  <p>Precio Unitario: {item.precio}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>
                    Subtotal: ${Number(item.precio) * Number(item.quantity)}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="vacio">Carrito Vacio</p>
        )}
      </div>
      <p className="total">
        Total:
        {cart.reduce(
          (prev, current) =>
            Number(prev) + Number(current.precio) * Number(current.quantity),
          0
        )}
      </p>
      <div className="form-wrapper">
        <input
          value={buyerEmail}
          placeholder="Email *"
          className="input-css"
          onChange={(e) => setBuyerEmail(e.target.value)}
        />
        <input
          value={buyerPhone}
          placeholder="Telefono *"
          className="input-css"
          onChange={(e) => setBuyerPhone(e.target.value)}
        />
        <input
          value={buyerName}
          placeholder="Nombre *"
          className="input-css"
          onChange={(e) => setBuyerName(e.target.value)}
        />
      </div>
      {cart.length ? (
        <button className="enviar" onClick={() => newOrder()}>
          Enviar
        </button>
      ) : null}
      {loading && <div className="loader">Espere...</div>}
      {message.length ? (
        <div className="div-mje">
          <span className="mensaje">{message}</span>{" "}
          <button className="aceptar" onClick={() => setMessage("")}>
            Aceptar
          </button>
        </div>
      ) : null}
    </div>
  );
}

//cloud functions- transaccion para restar el stock
//https://firebase.google.com/docs/functions/firestore-events     onCreate -> en la carpeta function q se crea del firestate
