import "./ItemListCarrito.scss";
import {useContext, useEffect} from "react"
import Cartwidget from "../Cartwidget/Cartwidget";
import {Link} from "react-router-dom"
import { CartContext } from "../../CartContext"

export default function ItemListCarrito(){
 
  const {cart} = useContext(CartContext)
  const {removeItem} = useContext (CartContext)
    useEffect( ()=>{
        console.log(cart.length)
    }, [cart])
  return(
    <div className="div-carro">
        <div className="carrito-titulo">
          <Link to="/cart" className="carro"><Cartwidget /></Link>
        </div>
        <div>
            {
              cart.length > 0 ? 
                  cart.map((item, key)=>{
                    return <div className="item-countainer">
                              <img src= {item.foto ? require(`../multimedia/${item.foto}`).default : ''} style = {{height: "10rem"}} alt="img"/>
                              <h1>{item.nombre} / {item.marca}</h1>
                              <div className="item-description">
                                  <p>Precio Unitario: {item.precio}</p>
                                  <p>Cantidad: {item.quantity}</p>
                                  <p>Subtotal: ${Number(item.precio) * Number(item.quantity)}</p>
                              </div>
                              <span className="remove" onClick={(e) => removeItem(item.id)}>❌</span>
                            </div> 
                  }
              ) : <p className="vacio">Carrito Vacio</p>
            }
        </div>
      </div>
  )
}
