import {useState, createContext} from "react";
//import ProductosJson from "./productos.json"

export const CartContext = createContext({}) // lo importo cuando quiero usar la info de acá
//export const CartProvider = CartContext.Provider
export const CartProvider = ({children}) =>{ // provee de la info, se usa solo 1 vez haciendo wrap (en app) a los compon que quiero q accedan a la info, la pasa
    let [quantity, setQuantity] = useState(0)
    const [arrayCart,setArrayCart] = useState([])

    //si item no esta en arrayCart, sumarlo
    //isInCart(codigo) true/false
    const getItem = (code)=>{
        return arrayCart.find((obj) => obj.codigo === code)
    }
    const isInCart = (code) => {
        return code === undefined ? undefined : getItem(code) !== undefined
    }
    //addItem(item, )
    const addItem = (item, number)=>{
        const newCart = [...arrayCart]
        console.log("addItem:", item)
        console.log("number:",number)
        if(isInCart(item.codigo)){
            newCart[newCart.finIndex(prop => prop.codigo === item.codigo)].quantity+= number
            setArrayCart(newCart)
            //console.log(quantity = quantity + number)
            setQuantity(parseInt(quantity+= number))
            return
            //setQuantity(item.quantity= item.quantity + number)
        }else{
            item.quantity = number
            newCart.push(item)
            setArrayCart(newCart)
            console.log(quantity = quantity,parseInt(number))
            setQuantity(quantity+= number)
            console.log(quantity)
        }
        //console.log("context:"+quantity)
        console.log(arrayCart)
    }

    //removeItem(itemId)
    const removeItem = (itemId) => {
        return isInCart(itemId) ? setArrayCart(arrayCart.filter((item) => {return item.codigo !== itemId})) : undefined
    }

    const clean = () => {
        setArrayCart([]);
        return
    }
    //cleat() limpiar todo el arrayCart


    //mantener consistencia

    
    return(
        <CartContext.Provider value={{arrayCart, addItem, quantity, removeItem, clean}}>
            {children}
        </CartContext.Provider>
    )
}
// {arrayCart, 
//     addItem, 
//     isInCart, 
//     quantity}