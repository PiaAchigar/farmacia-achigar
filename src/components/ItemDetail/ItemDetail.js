import "./ItemDetail.scss";


export default function ItemDetail({idProd}){
    console.log("estoy en ItemDetail:"+ idProd)
    return(
        <div className="div-itemDetail">
           <p>Producto</p>
           <p>Id del Producto: {idProd}</p>
           {/* <img src= {product.foto ? require(`../multimedia/${product.foto}`).default : ''} style = {{height: "10rem"}} alt="img"/>
               {console.log("Foto Item:"+product.foto)}
               <h3>{product.marca}</h3>
               <h3>{product.nombre}</h3> */}
        </div>
    )
}