import "./ItemDetailContainer.scss";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState , useEffect } from "react";
import {useParams} from "react-router-dom";

export default function ItemDetailContainer(){
    const [products, setProductos] = useState([]);
    const props = useParams();
    console.log("estoy dentro de ItemDetailContainer"+ props.idProducto)
    //JSON.stringify(props)
    useEffect(()=>{
        const loadProducts = async()=>{
            const res = await fetch(`https://challenge-meli-backend.herokuapp.com/api/items`)
            const products = await res.json()
            setProductos(products.items)
            //console.log(products.items)
        }
        loadProducts()
        
    },[])

    const getItem = (props) =>{
        console.log("dentro IDC func getItem:" + props)
       return products.find((idP)=> idP === props) // no logoro aun que me devuelva el obj...
    }
    

    return(
        <div>
            <h2>Estoy en ItemDetailComponent</h2>
            {/* <div>Id producto {JSON.stringify(idProducto)}</div> */}
            <ItemDetail 
            idProd = {props.idProducto}
            // nombre = {getItem(props.idProducto).title}
            // foto = {getItem(props.idProducto).picture}
            
            />
        </div>
    )
}
































//Cuando tenga q mandar los datos del producto al carrito usar :https://es.reactjs.org/docs/handling-events.html


//API Juan Pablo LOpez  : https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items 29/4
//menu hamburgueza https://www.youtube.com/watch?v=L7u6-t48tZw                       29/4