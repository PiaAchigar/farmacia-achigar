import "./ItemListCarrito.scss";

import Cartwidget from "../Cartwidget/Cartwidget";
import {Link} from "react-router-dom"

export default function ItemListCarrito(){ // Links
  //aca tengo q poner las fotos del carrito (Perfumer/Dermocosm/etc)
  return(
    <div className="div-carro">
        <div className="carrito-titulo">
         <Link to="/cart" className="carro"><Cartwidget /></Link>
        </div>
        {/* recorrer el cart.map e imprimirlo */}
      </div>
  )
}
