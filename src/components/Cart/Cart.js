//https://www.youtube.com/watch?v=02ieJ1YXZM4
//https://www.youtube.com/watch?v=02ieJ1YXZM4&t=761s
import {useParams} from "react-router-dom";
export default function Cart(){
    const {codigoItem} = useParams();
    console.log(codigoItem)
    return(
        <div>
            Item Seleccionado : {codigoItem}
        </div>
    )
}
