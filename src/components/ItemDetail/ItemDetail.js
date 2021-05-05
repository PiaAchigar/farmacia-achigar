import "./ItemDetail.scss";


export default function ItemDetail({idProd, nombre, foto}){
    console.log("estoy en ItemDetail:"+ idProd)
    return(
        <div>
           <h2>Mostrar el detalle del producto</h2>
           <p>Producto</p>
           <p>Id del Producto: {idProd}</p>
        </div>
    )
}
//Vista del Producto con su img, detalle y precio 