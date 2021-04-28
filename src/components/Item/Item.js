//import { MdShoppingCart } from "react-icons/md";
import "./Item.scss";
//import img from "../../multimedia/oferta1.png"

export default function Item({product}){

    return(
       <div className="card">
          <img src= {product.picture} style = {{height: "4rem"}} alt="img"/>
          <p>{product.title}</p>
          <p>$ {product.price.amount}</p>
       </div>
    )
}
//ejemplo: https://www.youtube.com/watch?v=FOWO07pImCg&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=5
 //<li>{props.arreglo.join(", ")}</li>
//<li>{props.objeto.nombre + " - " + props.objeto.correo}</li>