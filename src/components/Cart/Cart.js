//https://www.youtube.com/watch?v=02ieJ1YXZM4
//https://www.youtube.com/watch?v=02ieJ1YXZM4&t=761s

import {useContext, useEffect} from "react"
import {CartContext} from "../../CartContext"
import {Link} from "react-router-dom"
import "./Cart.scss"
import Item from "../Item/Item"

export default function Cart(){
    const {arrayCart} = useContext(CartContext) //para usar el arrayCart
    const {cartFuncs} = useContext (CartContext)
    //para mostrar cuantos productos va hago arrayCart.length 
    //const {codigoItem} = useParams();
    //console.log(codigoItem)
    useEffect(() => {
        console.log(arrayCart)
    },[])
    
    return(
        <div className="cart-container">
            {
                arrayCart.length > 0
                    ? <div className="precio-total">Total: ${arrayCart.map((i) =>{return Number(i.precio) * Number(i.quantity)}).reduce((a,b)=> a + b)}</div>
                    : <></>
            }
            {
                arrayCart.length > 0
                ? arrayCart.map((item) => {return(
                    <div className="container-product">
                        <h1>{item.nombre} / {item.marca}</h1>
                        <div key={item.codigo} className="container-data">
                            <img src= {item.foto ? require(`../multimedia/${item.foto}`).default : ''} style = {{height: "10rem"}} alt="img"/>
                            <div className="item-description">
                                <p>Precio Unitario: {item.precio}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Subtotal: ${Number(item.precio) * Number(item.quantity)}</p>
                            </div>
                            <a href="/" className="remove" onClick={(e) => {e.preventDefault(); cartFuncs.removeItem(item.codigo); e.stopPropagation();}}>❌</a>
                        </div>
                    </div>
                )})
                :
                <p>Carrito Vacio</p>
            }
            <div className="shop">
                <Link exact to = {`/`}>Seguir comprando</Link>
            </div>
    
        </div>
    )
}
