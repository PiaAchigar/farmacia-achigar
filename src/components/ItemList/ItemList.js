import "./ItemList.scss";
import { useEffect } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
//import ProductosJson from "../../productos.json";
import PathBar from "../Pathbar/Pathbar";
import { getFirestore } from "../../firebase/index";

import { useSelector, useDispatch } from "react-redux";
import { types, status } from "./../../state";

//import productosJson from "./../../products";

const db = getFirestore();
const itemCollection = db.collection("items");

/*
const exportar = async () => {
  for await (const prod of productosJson) {
    await itemCollection.add(prod);
  }
};
exportar();
*/
export default function ItemList() {
  const props = useParams();
  const dispatch = useDispatch();
  const productState = useSelector((state) => state);
  console.log({ productState });
  // const [arrayFilterProducts, setArrayFilterProducts] = useState([])
  // const [items, setItems] = useState([])
  // const [isEmptyCategory , setIsEmptyCategory] = useState(false)

  useEffect(() => {
    //boilerplay - cosas que hay q hacer si o si
    dispatch({ type: types.PRODUCT_LOAD_INIT });
    itemCollection
      .get()
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        dispatch({ type: types.PRODUCT_LOAD_COMPLETED, payload: products });
      })
      .catch((error) => console.error("Firesotor error: ", error));
  }, [dispatch]);
  /*
    useEffect(() =>{
        let arrayFilter = items.filter((product) =>product.categoria === props.categoryId)
            if(!props.categoryId){ // es lo mismo q decis "si es "undefined" entrá?"
               setArrayFilterProducts(items)
            }  else{
                setArrayFilterProducts(arrayFilter)
            }
    }, [items , props.categoryId])
    console.log(items)
    */

  const categoryFilter = () => {
    if (!props.categoryId) {
      // es lo mismo q decis "si es "undefined" entrá?"
      return productState.products;
    } else {
      return productState.products.filter(
        (product) => product.categoria === props.categoryId
      );
    }
  };

  return (
    <>
      <PathBar ruta={props.categoryId || ""} />
      <div className="div-countainer">
        {productState.status === status.LOADING && (
          <div style={{ position: "absolute", border: "1px solid red" }}>
            {" "}
            Cargando...{" "}
          </div>
        )}

        {productState.searchString.length === 0 &&
          categoryFilter().length === 0 &&
          productState.status === status.COMPLETED && (
            <p>Esta categoría actualmente no tiene productos</p>
          )}

        {productState.searchString.length === 0 &&
          categoryFilter().map((prod) => <Item key={prod.id} product={prod} />)}

        {productState.searchString.length > 0 &&
          productState.products
            .filter(
              (p) =>
                p.marca
                  .toLowerCase()
                  .indexOf(productState.searchString.toLowerCase()) > -1 ||
                p.nombre
                  .toLowerCase()
                  .indexOf(productState.searchString.toLowerCase()) > -1
            )
            .map((prod) => <Item key={prod.id} product={prod} />)}
      </div>
    </>
  );
  /*
    return(
        <>
        <PathBar ruta = {props.categoryId || ""}/>
        <div className="div-countainer">
        {
            isEmptyCategory ? (
                <p>Esta categoría actualmente no tiene productos</p>
            ) : (
                arrayFilterProducts.length > 0 ? (
                    arrayFilterProducts.map((prod, key)=>{
                        return <Item product ={prod} />
                    })
                ) : (
                    <p></p>
                )
            )
        }
          
        </div>
        </>
    )
    */
}

// const getProducts = (products)=>{
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             return res(products)
//         },200)
//     })
// }

// useEffect(()=>{
//     getProducts(ProductosJson).then(result=>{
//         //console.log(result)
//         let arrayFilter = result.filter((product) =>product.categoria === props.categoryId)
//         setArrayFilterProducts(arrayFilter)
//         if(!props.categoryId){
//            setArrayFilterProducts(result)
//         }
//         //console.log(arrayFilterProducts)
//         return arrayFilterProducts
//     })

// },[props])

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
