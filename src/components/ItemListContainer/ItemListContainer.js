import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

//Maneja los cambios de Categoría
export default function ItemListContainer(){
  //const params = useParams() //es el idCategoria
 //console.log(params.categoryId)
  
    return(
        <div>
            <ItemList/>
        </div>
    )
}