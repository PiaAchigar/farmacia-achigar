import {useState, createContext} from "react";

export const CartContext = createContext({}) // lo importo cuando quiero usar la info de acá

export const CartProvider = ({children}) =>{ // provee de la info, se usa solo 1 vez haciendo wrap (en app) a los compon que quiero q accedan a la info, la pasa
    const [quantity, setQuantity] = useState(0)
    const [cart,setCart] = useState([]) 

    const addToCart = (item, number) => {
        const newCart = [...cart]
        const findItem = isInCart(item);
        //Si existe en el carrito
        if(findItem) {
            newCart[newCart.findIndex(prod => prod.id === item.id)].quantity += parseInt(number); 
            setCart(newCart);
            return;
        }
        //Si no esta en el carrito
        item.quantity = parseInt(number);
        newCart.push(item);
        setCart(newCart);
    }
    const isInCart = item => cart.find(product => product.id === item.id)
   

    const removeItem = (itemId) => {
        const newCart = cart.filter(item => item.id !== itemId)
        setCart(newCart)
    }

    const clean = () => {
        setCart([]);
    }

    return(
        <CartContext.Provider value={{cart, addToCart, quantity, removeItem, clean}}>
            {children}
        </CartContext.Provider>
    )
}