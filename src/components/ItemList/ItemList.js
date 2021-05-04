import "./ItemList.scss";
import { useState , useEffect } from "react";
import Item from "../Item/Item";


export default function ItemList({id}){
    const [products, setProductos] = useState([]);
    
    useEffect(()=>{
        const loadProducts = async()=>{
            const res = await fetch(`https://challenge-meli-backend.herokuapp.com/api/items?q=${id}`)
            const products = await res.json()
            setProductos(products.items)
            //console.log(products.items)
        }
        loadProducts()
        
    },[])
    
    return(
        <div className="div-count">
            
            {
                products.length > 0 ? (
                    products.map((prod, idx)=>{
                        return <Item product ={prod} key={idx}/>
                    })
                ) : (
                    <p>No hay productos</p>
                )
            }
          
        </div>
    )
}
//https://raw.githubusercontent.com/PiaAchigar/mockejson/main/productos.json
//products.map((perfumes)=>{le paso el perfume x props a Item})
//const {nombre,marca,descripcion} = perfume; significa que tome nombre, merca y descripcion del obj Perfume

//PARA ACCEDER A MIS PRODUCTOS: uso desestructuracion -> product.map (({nombre,titulo,descripcion,presentacion}) =>{ se lo paso o lo uso directamnete como "nombre"})
//clase 28/4 Routing y Navegacion (51.48 grabacion)