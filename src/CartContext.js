import {useState, createContext} from "react";

export const CartContext = createContext({}) // lo importo cuando quiero usar la info de acá

export const CartProvider = ({children}) =>{ // provee de la info, se usa solo 1 vez haciendo wrap (en app) a los compon que quiero q accedan a la info, la pasa
    const [quantity, setQuantity] = useState(0)
    const [cart,setCart] = useState([]) 

    const addToCart = (item, number) => {
        const newCart = [...cart]
        //Verificar si existe en el carrito
        const findItem = isInCart(item);
        //Si existe en el carrito
        if(findItem) {
            newCart[newCart.findIndex(prod => prod.id === item.id)].quantity += parseInt(number); //o .quantity++
            setCart(newCart);
            return;
        }
        //Si no esta en el carrito
        item.quantity = parseInt(number);
        newCart.push(item);
        setCart(newCart);
    }
    const isInCart = item => cart.find(product => product.id === item.id)
   
    

  
    // const isInCart = code => {
    //     let varItem = {}//probe con [] "" y {}
    //     console.log("code en isInCart" + code)
    //     console.log("arrayLength:" + arrayCart.length)
    //     if(arrayCart.length > 0){
    //         varItem = arrayCart.filter(prod => prod.codigo === code)
    //         console.log("array , varItem:" + varItem)// undefined o nada
    //         if(varItem.codigo === code){
    //             console.log("está" + varItem)
    //             return true
    //         }
    //     }
    //     return false
    // }
    // const addItem = (item, number)=>{
    //     const newCart = [...arrayCart]
    //     if(isInCart(item.codigo)){//  está
    //         const newProd = newCart.filter(prod => prod.codigo === item.codigo)
    //         console.log("newProd:"+ newProd)
    //         const newProdQuantity = newProd.quantity+= number  // aca revienta
    //         console.log("newProdQuantity:"+ newProd)
    //         newCart.push(newProdQuantity)
    //         //newCart[newCart.finIndex(prop => prop.codigo === item.codigo)].quantity+= number
    //         setArrayCart(newCart)
    //         console.log(newProd.quantity + number)
    //         setQuantity(newProd.quantity + number)
    //     }else{ // no está
    //         item.quantity = number
    //         console.log("number:"+ number)
    //         console.log("item.quantity:"+ item.quantity)
    //         console.log(quantity + number)// el + lo toma como concatenacion
    //         setQuantity(quantity + number)
    //         newCart.push(item)
    //         setArrayCart(newCart)  
    //     }
    // }

    const removeItem = (itemId) => {
        const newCart = cart.filter(item => item.id !== itemId)
        setCart(newCart)
    }

    const clean = () => {
        setCart([]);
    }
    //mantener consistencia, como?

    return(
        <CartContext.Provider value={{cart, addToCart, quantity, removeItem, clean}}>
            {children}
        </CartContext.Provider>
    )
}