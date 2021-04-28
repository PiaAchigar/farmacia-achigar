import "./ItemList.scss";
import { useState , useEffect } from "react";
import Item from "../Item/Item";


export default function ItemList(){
    const [products, setProductos] = useState([]);
    
    useEffect(()=>{
        const loadProducts = async()=>{
            const res = await fetch("https://challenge-meli-backend.herokuapp.com/api/items?q=dermocosmetica")
            const products = await res.json()
            setProductos(products.items)
        }
        loadProducts()
        
    },[])
    
    return(
        <div className="div-count">
            
            {
                products.length > 0 ? (
                    products.map((prod)=>{
                        return <Item product ={prod}
                        />
                    })
                ) : (
                    <p>No hay productos</p>
                )
            }
          
        </div>
    )
}
//https://raw.githubusercontent.com/PiaAchigar/mockejson/main/productos.json