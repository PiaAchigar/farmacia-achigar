import "./ItemListCarrito.scss";
import Cartwidget from "../Cartwidget/Cartwidget";

export default function ItemListCarrito(){ // Links
  //aca tengo q poner las fotos del carrito (Perfumer/Dermocosm/etc)
  return(
      <div className="carrito-titulo">
        <Cartwidget className="carro"/>
        <h3> Tu Carrito </h3>
      </div>
  )
}
