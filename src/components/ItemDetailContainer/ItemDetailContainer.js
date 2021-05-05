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
       return products.find((idP)=> idP === props)
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

 //cuando se abre, tiene q tener un efecto de montaje=UseEffect
    //debe llamar a un async mock(promice) que en 2 seg le devuelva el item y lo guardo en un State
    // const getItem= () =>{
    //     //f(x) que retorna la promesa con delay

    // }

    // function ItemDetailContainer(){
    //     //Implementar mock invocando a getItems() y utilizando el resolver then return /* JSX que devuelva un ItemDetail (desafío 6b) */
        

    // }



//Cuando tenga q mandar los datos del producto al carrito usar :https://es.reactjs.org/docs/handling-events.html


//API Juan Pablo LOpez  : https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items 29/4
//menu hamburgueza https://www.youtube.com/watch?v=L7u6-t48tZw                       29/4