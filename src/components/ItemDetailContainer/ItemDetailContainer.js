import "./ItemDetailContainer.scss";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState , useEffect } from "react";

export default function ItemDetailContainer({idProducto}){
    const [products, setProductos] = useState([]);
    const {idProducto} = useParams();
    
    useEffect(()=>{
        const loadProducts = async()=>{
            const res = await fetch(`https://challenge-meli-backend.herokuapp.com/api/items`)
            const products = await res.json()
            setProductos(products.items)
            console.log(products.items)
        }
        loadProducts()
        
    },[])

    const getItem = (idProducto) =>{
       return products.find((idProducto)=> product.id ===idProducto)
    }
    

    return(
        <div>
            <h2>Estoy en ItemDetailComponent</h2>
            
            <ItemDetail 
            idProducto = {getItem(idProducto).id}
            nombre = {getItem(idProducto).title}
            foto = {getItem(idProducto).picture}
            
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