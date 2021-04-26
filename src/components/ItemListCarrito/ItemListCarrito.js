import "./ItemListCarrito.scss";
import ItemCount from "../ItemCount/ItemCount";
import Cartwidget from "../Cartwidget/Cartwidget";

export default function ItemListCarrito(){ // Links
  //aca tengo q poner las fotos del carrito (Perfumer/Dermocosm/etc)
  return(
    <div className="div-carro">
        <div className="carrito-titulo">
          <Cartwidget className="carro"/>
          <h3>Tu Carrito</h3>
          <h4>Vacio</h4>
        </div>
        <div className="ItemCount"><ItemCount /></div>
      </div>
  )
}
