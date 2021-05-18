//https://www.youtube.com/watch?v=02ieJ1YXZM4
//https://www.youtube.com/watch?v=02ieJ1YXZM4&t=761s
import {useParams} from "react-router-dom";
import {useContext} from "react"
import {CartContext} from "../../CartContext"

export default function Cart(){
    const value = useContext(CartContext) //para usar el arrayCart
    //para mostrar cuantos productos va hago arrayCart.length 
    const {codigoItem} = useParams();
    console.log(codigoItem)
    return(
        <div>
            Item Seleccionado : {codigoItem}
            <>
            {/* {
                arrayCart.length > 0
                ? <div className="totalPrice">Total: $<b>{arrayCart.map((i) => {return Number(i.price.replace("$", "")) * Number(i.quantity)}).reduce((a,b) => a + b)}</b></div>
                : <></>
            }
            {
                arrayCart.length > 0
                ? arrayCart.map((item) => {return (
                    <div className="productContainer">
                        <h1>{item.name}</h1>
                        <div key={item.name} className="dataContainer">
                            <p><img className="imgItemCart" src={item.foto} alt={item.name} /></p>
                            <div className="itemDescript">
                                <p>Precio Unitario: {item.price}</p>
                                <p>Cantidad pedida: {item.quantity}</p>
                                <p>Subtotal: {Number(item.price.replace("$", "")) * Number(item.quantity)}</p>
                                <a href="/" className="iconRemove" onClick={(e) => {e.preventDefault(); cartFuncs.removeItem(item.id); e.stopPropagation();}}>❌</a>{/* en tu cara fontAwesome! */}
                            {/* </div>
                        </div>
                    </div>
                )})
                : <p>Carrito Vacio</p>
            }
            <div className="keepShopping">
                <Link to='/'>Seguir comprando!</Link>
            </div> */}
        </>
        </div>
    )
}
