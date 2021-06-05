import "./Item.scss";
import { Link } from "react-router-dom";
export default function Item({ product }) {
  return (
    <Link exact to={`/item/${product.id}`} className="link-item">
      <div className="card">
        <img src={product.foto} style={{ height: "10rem" }} alt="img" />
        <h3>{product.marca}</h3>
        <h3>{product.nombre}</h3>
      </div>
    </Link>
  );
}
