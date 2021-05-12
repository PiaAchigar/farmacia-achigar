import "./Presentacion.scss";


export default function Presentacion({present}){

    return(
        <div className="radio">
            {present && present.map((prod, key)=>{
                
                return   <><label>
                            {key}
                            <input type="radio" value="{prod.codigo}" className="input-presentacion"/>
                            {prod.tamanio}ml----${prod.precio}
                            </label>
                        </>
                        
            })}
            
        </div>
    )
}
//https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs
// checked={this.state.selectedOption === "Male"}
//onChange={this.onValueChange}