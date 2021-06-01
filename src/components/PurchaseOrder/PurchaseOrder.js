import "./PurchaseOrder.scss";

export default function Purchaseorder() {
  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  //console.log(product);
  return (
    <div className="purchaseOrder-wrapper">
      <h1>Orden de Compra</h1>
      <div className="description">Productos</div>
      <p>Total:</p>
      <div className="form-wrapper">
        <input placeholder="Email" className="input-css" />
        <input placeholder="Telefono" className="input-css" />
        <input placeholder="Nombre" className="input-css" />
      </div>
      <button>Enviar</button>
    </div>
  );
}
//tengo q traerme el cart y renderizar la descripcion con el total de la compra... error en el cartWiget... no ve el "cart"
