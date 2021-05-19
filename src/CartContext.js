import {useState, createContext} from "react";
//import ProductosJson from "./productos.json"

export const CartContext = createContext({}) // lo importo cuando quiero usar la info de acá
//export const CartProvider = CartContext.Provider
export const CartProvider = ({children}) =>{ // provee de la info, se usa solo 1 vez haciendo wrap (en app) a los compon que quiero q accedan a la info, la pasa
    const [quantity, setQuantity] = useState(0)
    const [arrayCart,setArrayCart] = useState([])

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
        console.log("addItem:", item)
        console.log("number:",number)
        if(isInCart(item.codigo)){
            setQuantity(item.quantity+=number)
            console.log("item repetido...")
        }else{
            item.quantity = number
            console.log(item.quantity)
            setArrayCart([...arrayCart, item])
            console.log("else, arrayCarrito:", arrayCart)
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
        <CartContext.Provider value={{arrayCart, addItem, quantity}}>
            {children}
        </CartContext.Provider>
    )
}
// {arrayCart, 
//     addItem, 
//     isInCart, 
//     quantity}