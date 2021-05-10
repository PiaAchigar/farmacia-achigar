import "./ItemList.scss";
import { useState , useEffect } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import ProductosJson from "../../productos.json";

export default function ItemList(){
    const props = useParams()
    const [arrayFilterProducts, setArrayFilterProducts] = useState([])
    console.log("ItemList"+ props.categoryId)
    
    const getProducts = (products)=>{
        return new Promise((res, rej)=>{
            setTimeout(()=>{
                return res(products)
            },1000)
        })
    }

    useEffect(()=>{
        getProducts(ProductosJson).then(result=>{
            console.log(result)
            let arrayFilter = result.filter((product) =>product.categoria === props.categoryId)
            console.log(arrayFilter)
            setArrayFilterProducts(arrayFilter)
            if(!props.categoryId){
                console.log("dentro del if"+props.categoryId)
               setArrayFilterProducts(result)
            }  
            console.log(arrayFilterProducts)
            return arrayFilterProducts
        })
       
    },[props])
    
    return(
        <div className="div-countainer">
            
            {
                arrayFilterProducts.length > 0 ? (
                    arrayFilterProducts.map((prod, key)=>{
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



            // const loadProducts = async()=>{
            //     let res = ""
            //     let products = ""
            //     console.log("entro al loadProducts")
            //     if(!props.categoryId){ //si el props.categoryId es vacio, entra
            //          console.log("entro al if")
            //         res = await fetch(`https://challenge-meli-backend.herokuapp.com/api/items?q=farmacia`)
            //         products = await res.json()
            //         setProducts(products.items)
            //        // setProductos([...products, products.items])
            //     }else{
            //         console.log ("entro al if" + props.categoryId)
            //         res = await fetch(`https://challenge-meli-backend.herokuapp.com/api/items?q=${props.categoryId}`)
            //         products = await res.json()
            //         setProducts(products.items)
            //     }
            // }
            // loadProducts()