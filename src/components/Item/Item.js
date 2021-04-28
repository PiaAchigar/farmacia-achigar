//import { MdShoppingCart } from "react-icons/md";
import "./Item.scss";
//import img from "../../multimedia/oferta1.png"

export default function Item(props){

    return(
       <div className="card">
            <div className="div-img">
                <img src= {props.picture} style = {{height: "3rem"}} alt="img"/>
           </div>
           {/*<div className="div-descrption">
                <p>{descripcion}</p>
           </div>
           <div className="div-price-add">
                <p>$ {precio}</p>
                <p>Stock disponible</p>
                <p>{stock}</p>
           </div> */}
       </div>
    )
}
//ejemplo: https://www.youtube.com/watch?v=FOWO07pImCg&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=5
 //<li>{props.arreglo.join(", ")}</li>
//<li>{props.objeto.nombre + " - " + props.objeto.correo}</li>