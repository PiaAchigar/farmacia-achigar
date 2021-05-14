import { useState } from "react";
import "./Presentacion.scss";
import ProductosJson from "../../productos.json"

export default function Presentacion({present}){
    const [formData, setformData] = useState({
        isAgree : false, //checkbox
        selected : "" //radio
    })
    const handelChange = event =>{
        console.log (event.target.value)
        //const select = event.targt.name
        
        const value = event.target.value
        //const prod = ProductosJson.find((item)=> item.find((present) => present.codigo === event.target.value))
       //https://www.youtube.com/watch?v=wF0drGBIZ_k
       //https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs
        console.log(prod.nombre)
        // setformData({
        //     ...formData,
        // [select] : value
        // })
    }
    return(
        
        <div className="radio">
            {present && present.map((prod, key)=>{
                return   <><label>
                            <input type="radio" value={prod.codigo} className="input-presentacion" key = {key} name = "selected" onChange = {handelChange}/>
                            {prod.tamanio}----${prod.precio}
                            </label>
                        </>
            })}
            
        </div>
    )
}
//https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs
// checked={this.state.selectedOption === "Male"}
//onChange={this.onValueChange}