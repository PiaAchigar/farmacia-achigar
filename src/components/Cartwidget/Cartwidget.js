import { MdShoppingCart } from "react-icons/md";
import "./Cartwidget.scss";
//CartWidget = artilugio
const Cartwidget = ({itemsQuantity=0}) => {
    return(
       <div className="div-cartWidget">
           <MdShoppingCart size="2rem"/>
           <p>({itemsQuantity})</p>
       </div>
    )
}

export default Cartwidget;