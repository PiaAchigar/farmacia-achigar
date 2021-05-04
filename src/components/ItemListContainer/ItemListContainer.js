import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";
//import ArrayCategoryes from "../../categoryes.json";

export default function ItemListContainer({id}){
  
    return(
        <div>
            <ItemList id={id}/>
        </div>
    )
}