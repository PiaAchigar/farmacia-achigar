import "./Item.scss";
import {Link} from  'react-router-dom';

export default function Item({product}){

    return(
       <div className="card">
         <Link exact to = {`/item/${product.id}`}>
            <span>
               <img src= {product.picture} style = {{height: "4rem"}} alt="img"/>
               <p>{product.title}</p>
               <p>$ {product.price.amount}</p>
            </span>   
          </Link>
       </div>

    )
}
























//ejemplo: https://www.youtube.com/watch?v=FOWO07pImCg&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=5
 //<li>{props.arreglo.join(", ")}</li>
//<li>{props.objeto.nombre + " - " + props.objeto.correo}</li>