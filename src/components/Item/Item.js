//import { MdShoppingCart } from "react-icons/md";
///import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import "./Item.scss";
import {Link} from  'react-router-dom';
//Tengo q usar useParams
//Ver video 1.24minutos!!!!  Tiene q recibir el id por route
//Ver diapo 35 :)
// de aca tengo q mandarlo a ItemDetailsContainer

export default function Item({product, key}){
   //   function handleClick(e) {
   //        e.preventDefault();
   //        console.log('Item Cliqueado');
   //        //tendria q abrir <ItemDetailContainer/>
           
   //      }

    return(
       <div className="card" key = {key}>
         <Link exact to = {`/itemDetailContainer/${product.id}`}>
            <img src= {product.picture} style = {{height: "4rem"}} alt="img"/>
            <p>{product.title}</p>
            <p>$ {product.price.amount}</p>
          </Link>
       </div>

    )
}
//ejemplo: https://www.youtube.com/watch?v=FOWO07pImCg&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=5
 //<li>{props.arreglo.join(", ")}</li>
//<li>{props.objeto.nombre + " - " + props.objeto.correo}</li>