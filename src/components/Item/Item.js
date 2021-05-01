//import { MdShoppingCart } from "react-icons/md";
//import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import "./Item.scss";
//import img from "../../multimedia/oferta1.png"

export default function Item({product, key}){
     function handleClick(e) {
          e.preventDefault();
          console.log('The link was clicked.');
          //tendria q abrir <ItemDetailContainer/>
        }
    return(
       <div className="card" onClick= {handleClick} key = {key}>
          <img src= {product.picture} style = {{height: "4rem"}} alt="img"/>
          <p>{product.title}</p>
          <p>$ {product.price.amount}</p>
       </div>

    )
}
//ejemplo: https://www.youtube.com/watch?v=FOWO07pImCg&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=5
 //<li>{props.arreglo.join(", ")}</li>
//<li>{props.objeto.nombre + " - " + props.objeto.correo}</li>