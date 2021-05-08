import "./Item.scss";
import {Link} from  'react-router-dom';
import Presencacion from "../Presentacion/Presentacion";
export default function Item({product}){

    return(
       <div className="card">
         
            <span>
            <Link exact to = {`/item/${product.id}`} className="link-item">
               <img src= {product.foto ? require(`../multimedia/${product.foto}`).default : ''} style = {{height: "10rem"}} alt="img"/>
               {console.log("Foto Item:"+product.foto)}
               <h3>{product.marca}</h3>
               <h3>{product.nombre}</h3>
            </Link>
            <Presencacion present ={product.presentacion}/>
            </span>   
         
       </div>

    )
}



//src={product.img ? require(`../rutadelaimagen/${product.img}`).default : ''}
//Import imagen from '../rutadekmagen'




















//ejemplo: https://www.youtube.com/watch?v=FOWO07pImCg&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=5
 //<li>{props.arreglo.join(", ")}</li>
//<li>{props.objeto.nombre + " - " + props.objeto.correo}</li>