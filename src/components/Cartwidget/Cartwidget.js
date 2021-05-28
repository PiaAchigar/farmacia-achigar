
import { MdShoppingCart } from "react-icons/md";
import "./Cartwidget.scss";


//CartWidget = artilugio
const Cartwidget = ({itemsQuantity}) => {
    const handlerWidget = e => {
        
    }
    return(
       <div className="div-cartWidget" onClick={handlerWidget}>
           <MdShoppingCart size="2rem"/>
           {itemsQuantity > 0 ?(
               <>
               <p>({itemsQuantity})</p>
               </>
               ) : ( 
               <></>
               )
           }
           
       </div>
    )
}

export default Cartwidget;