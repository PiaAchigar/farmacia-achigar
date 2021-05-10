import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount"
import Presentacion from "../Presentacion/Presentacion";

export default function ItemDetail({idProd}){
    console.log("estoy en ItemDetail:"+ idProd?.id)
    return(
        <div className="div-itemDetail">
           
           <img src= {idProd.foto ? require(`../multimedia/${idProd.foto}`).default : ''} style = {{height: "20rem"}} alt="img"/>
               <h3>{idProd?.marca}</h3>
               <h3>{idProd?.nombre}</h3> 
               <h4>{idProd?.descripcion}</h4>
               <p>Id del Producto: {idProd?.id}</p>
               <Presentacion present = {idProd?.presentacion}/>
                <ItemCount/>
        </div>
    )
} 