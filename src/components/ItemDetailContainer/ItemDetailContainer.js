import "./ItemDetailContainer.scss";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer(){
    //cuando se abre, tiene q tener un efecto de montaje=UseEffect
    //debe llamar a un async mock(promice) que en 2 seg le devuelva el item y lo guardo en un State
    const getItem= () =>{
        //f(x) que retorna la promesa con delay
    }

    function ItemDetailContainer(){
        //Implementar mock invocando a getItems() y utilizando el resolver then return /* JSX que devuelva un ItemDetail (desafío 6b) */
        

    }
    return(
        <div>
            <ItemDetail/>
        </div>
    )
}
//Cuando tenga q mandar los datos del producto al carrito usar :https://es.reactjs.org/docs/handling-events.html


//API Juan Pablo LOpez  : https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items 29/4
//menu hamburgueza https://www.youtube.com/watch?v=L7u6-t48tZw                       29/4