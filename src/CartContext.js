import {useState, createContext} from "react";
//import ProductosJson from "./productos.json"

export const CartContext = createContext([]) // lo importo cuando quiero usar la info de acá

export const CartProvider = ({children}) =>{ // provee de la info, se usa solo 1 vez haciendo wrap (en app) a los compon que quiero q accedan a la info, la pasa
   const defaultValue = useState([])
    const [quantity, setQuantity] = useState(0)
    const [arrayCart,setArrayCart] = useState(defaultValue)

    //si item no esta en arrayCart, sumarlo
    //isInCart(codigo) true/false
    const getItem = (code)=>{
        return arrayCart.find((obj) => obj.codigo == code)
    }
    const isInCart = (code) => {
        return code === undefined ? undefined : getItem(code) !== undefined
    }
    //addItem(item, )
    const addItem = (item, number)=>{
        console.log("addItem:")
        console.log(item)
        console.log(number)
        if(isInCart(item.codigo)){
            setQuantity(item.quantity+=number)
            console.log("item repetido...")
            //como seteo , sumo esa cantidad a un ojb ya existente dentro de mi array??
        }else{
            item.quantity = number
            setArrayCart([...arrayCart, {...item, quantity:number}])
        }
        console.log("context:"+quantity)
        console.log(arrayCart)
    }

    //removeItem(itemId)
    // const removeItem = (itemId) => {
    //     return isInCart(itemId) ? setCart(cart.filter((item) => {return item.id !== itemId})) : undefined;
    // }

    // const clean = () => {
    //     setCart(defaultValue);
    //     return;
    // }
    //cleat() limpiar todo el arrayCart


    //mantener consistencia

    
    return(
        <CartContext.Provider value={{arrayCart, addItem}}>
            {children}
        </CartContext.Provider>
    )
}
// {arrayCart, 
//     addItem, 
//     isInCart, 
//     quantity}