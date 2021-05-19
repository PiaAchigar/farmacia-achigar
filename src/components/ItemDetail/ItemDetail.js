import "./ItemDetail.scss"
import ItemCount from "../ItemCount/ItemCount"
import { useState , useContext} from "react"
import { CartContext } from "../../CartContext"
import ProductosJson from "../../productos.json"
import {Link, useParams} from  'react-router-dom'

//con el context tengo q lograr guardarme value={idProd?.codigo} cuando aprete "agregar"
export default function ItemDetail(){
    const idProd = useParams()
    const {arrayCart, addItem} = useContext(CartContext) 
   
    let [isClecked, setIsClicked] = useState(true)
    const product = ProductosJson.find((p)=> p.id == idProd.idProducto)
    
    function onAdd(event){
        setIsClicked(false)
        const cantProducts = event.target.value
        console.log("onAdd:", cantProducts)
        addItem(product,cantProducts)
    }
    return(
        <div className="div-itemDetail">
           
           <img src= {product.foto ? require(`../multimedia/${product.foto}`).default : ''} style = {{height: "20rem"}} alt="img"/>
               <h3>{product?.marca}</h3>
               <h3>{product?.nombre}</h3> 
               <h4>{product?.descripcion}</h4>
               
                {isClecked ?
                    (<>
                        {product?.tamanio}----${product?.precio}
                        <ItemCount stock = {product?.stock} add = {onAdd}/>
                    </>)
                    :(<>
                    <Link exact to = {`/Cart/${product?.codigo}`} className="link-item">
                        <button className="btn-ir">Ir al Carrito</button>
                    </Link>
                    </>)
                }
        </div>
    )
} 

//https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs
// checked={this.state.selectedOption === "Male"}
//onChange={this.onValueChange}

{/* <label>
<input type="radio" value={idProd?.codigo} className="input-presentacion" name = "selected" onChange = {handelChange}/>
{idProd?.tamanio}----${idProd?.precio}
</label> */}
// const [itemData, setitemData] = useState({
//     isAgree : false, //checkbox
//     selected : "" //radio
// })
// const handelChange = event =>{
//     console.log (ProductosJson)
//     const value = event.target.value
//     console.log(value)
//     const prod = ProductosJson.find((item) => item.codigo == value)
//     console.log(prod.nombre)
//https://www.youtube.com/watch?v=wF0drGBIZ_k
       //https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs
        // console.log(prod.nombre)
        // setitemData({
        //     ...itemData,
        // [select] : value
        // })
   // }
