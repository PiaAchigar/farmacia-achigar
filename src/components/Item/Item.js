//import { MdShoppingCart } from "react-icons/md";
import "./Item.scss";
import img from "../../multimedia/oferta1.png"

export default function Item (){

    return(
       <div className="card">
           <div className="div-img">
                <img src= {img} style = {{height: "3rem"}} alt="img"/>
           </div>
           <div className="div-descrption">

           </div>
           <div className="div-price-add">

           </div>
       </div>
    )
}