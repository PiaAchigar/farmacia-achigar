import "./ItemList.scss";
import { useState , useEffect } from "react";
import Item from "../Item/Item";


export default function ItemList(){
    const [products, setProductos] = useState([]);
    
    useEffect(()=>{
        const loadProducts = async()=>{
            const res = await fetch("https://challenge-meli-backend.herokuapp.com/api/items?q=jordan")
            const products = await res.json()
            console.log(products)
            setProductos(products.items)
        }
        loadProducts()
    },[])
    
    return(
        <>
            <div>
                <h2>Productos</h2>
            </div>
            {
                products.length > 0 ? (
                    products.map((prod)=>
                        <Item prod/>
                    )
                ) : (
                    <p>No hay productos</p>
                )
            }
            {/* recorro el array de obj y se lo voy mandando a Item */}
          
        </>
    )
}
//https://raw.githubusercontent.com/PiaAchigar/mockejson/main/productos.json