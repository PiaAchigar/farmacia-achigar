import "./ItemDetail.scss"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import ProductosJson from "../../productos.json"
import {Link} from  'react-router-dom'

//con el contyext tengo q lograr guardarme value={idProd?.codigo} cuando aprete "agregar"
export default function ItemDetail({idProd}){
    console.log("estoy en ItemDetail:"+ idProd?.id)
    let [condition, setCondition] = useState(true)
    const [itemData, setitemData] = useState({
        isAgree : false, //checkbox
        selected : "" //radio
    })
    const handelChange = event =>{
        console.log (ProductosJson)
        //const select = event.targt.name
        const value = event.target.value
        console.log(value)
        const prod = ProductosJson.find((item) => item.codigo == value)
        console.log(prod.nombre)

       //https://www.youtube.com/watch?v=wF0drGBIZ_k
       //https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs
        // console.log(prod.nombre)
        // setitemData({
        //     ...itemData,
        // [select] : value
        // })
    }

    function onAdd(event){
        setCondition(false)
        console.log(event.target.value)
        //debo enviar la cantidad seleccionada por el usuario
        //const cantSelected = value 
    }
    return(
        <div className="div-itemDetail">
           
           <img src= {idProd.foto ? require(`../multimedia/${idProd.foto}`).default : ''} style = {{height: "20rem"}} alt="img"/>
               <h3>{idProd?.marca}</h3>
               <h3>{idProd?.nombre}</h3> 
               <h4>{idProd?.descripcion}</h4>
               
                {condition ?
                    (<>
                        {idProd?.tamanio}----${idProd?.precio}
                        <ItemCount stock = {idProd?.stock} add = {onAdd}/>
                    </>)
                    :(<>
                    <Link exact to = {`/Cart/${idProd?.codigo}`} className="link-item">
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