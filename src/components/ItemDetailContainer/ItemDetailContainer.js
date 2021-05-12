import "./ItemDetailContainer.scss";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import ProductosJson from "../../productos.json";
import { useEffect, useState } from "react";

export default function ItemDetailContainer(){
    const {idProducto} = useParams();
    const [ItemDetalle, setItemDetalle] = useState([])
    console.log("estoy dentro de ItemDetailContainer"+ idProducto)
    console.log(ProductosJson)
    useEffect(()=>{
        console.log(ProductosJson)
        const varDetail = ProductosJson.find((product) => product.id == idProducto)
        console.log("varDetail:"+ varDetail)
         setItemDetalle(varDetail)
    },[idProducto])
    
    return(
        <div>
            <ItemDetail idProd = {ItemDetalle} />
        </div>
    )
}

//JSON.stringify(props)
    // const getProducts = (produst)=>{

    // }
    // useEffect(()=>{
    //     const loadProducts = async()=>{
    //         const res = await fetch(`https://challenge-meli-backend.herokuapp.com/api/items?q=${props.idProducto}`)
    //         const products = await res.json()
    //         setProductos(products.items)
    //         console.log(products.items)
    //     }
    //     loadProducts()
        
    // },[])

    // const getItem = (producto) =>{
    //     console.log("dentro IDC func getItem:" + props)
    //    return products.map((p)=> p.idProducto===producto)
    // }
    
//products.find((idP)=> idP === props) // no logro aun que me devuelva el obj...






























//Cuando tenga q mandar los datos del producto al carrito usar :https://es.reactjs.org/docs/handling-events.html


//API Juan Pablo LOpez  : https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items 29/4
//menu hamburgueza https://www.youtube.com/watch?v=L7u6-t48tZw                       29/4