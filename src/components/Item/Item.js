import "./Item.scss";
import { Link } from "react-router-dom";
export default function Item({ product }) {
  return (
    <Link exact to={`/item/${product.id}`} className="link-item">
      <div className="card">
        <span>
          <img src={product.foto} style={{ height: "10rem" }} alt="img" />
          <h3>{product.marca}</h3>
          <h3>{product.nombre}</h3>
        </span>
      </div>
    </Link>
  );
}

//          mandar       obtener
// const { useDispatch, useSelector } from "redux"
// const dispatch = useDispatch()
//https://www.digitalocean.com/community/tutorials/redux-redux-thunk-es

//ejemplo: https://www.youtube.com/watch?v=FOWO07pImCg&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=5
//<li>{props.arreglo.join(", ")}</li>
//<li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
