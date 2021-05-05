import "./ItemList.scss";
import { useState , useEffect } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";

export default function ItemList(){
    const props = useParams()
    const [products, setProducts] = useState([]);
    console.log("ItemList"+ props.categoryId)
    
    useEffect(()=>{
            const loadProducts = async()=>{
                let res = ""
                let products = ""
                console.log("entro al loadProducts")
                if(!props.categoryId){ //si el props.categoryId es vacio, entra
                     console.log("entro al if")
                    res = await fetch(`https://challenge-meli-backend.herokuapp.com/api/items?q=farmacia`)
                    products = await res.json()
                    setProducts(products.items)
                   // setProductos([...products, products.items])
                }else{
                    console.log ("entro al if" + props.categoryId)
                    res = await fetch(`https://challenge-meli-backend.herokuapp.com/api/items?q=${props.categoryId}`)
                    products = await res.json()
                    setProducts(products.items)
                }
            }
            loadProducts()
    },[])
    
    return(
        <div className="div-count">
            
            {
                products.length > 0 ? (
                    products.map((prod)=>{
                        return <Item product ={prod}/>
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