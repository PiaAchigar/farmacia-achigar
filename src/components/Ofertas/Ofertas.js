import "./Ofertas.scss";
import Card from "../Card/Card";
import {Products} from "../../productos.json";

export default function Ofertas (){
    
    return(
       <div>
           {products.map((prod)=>{
                return <Card />
            })}
         {/* Por cada producto renderee una Card */}
       </div>
    )
}