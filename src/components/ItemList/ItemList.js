import "./ItemList.scss";
import PathBar from "../Pathbar/Pathbar";
import Item from "../Item/Item";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/index";
import { useSelector, useDispatch } from "react-redux";
import { types, status } from "./../../state";

const db = getFirestore();
const itemCollection = db.collection("items").where("stock", ">", 0);

export default function ItemList() {
  const props = useParams();
  const dispatch = useDispatch();
  const productState = useSelector((state) => state);

  //db.collection('items', ref => ref.where('stock', '>', '0'))

  useEffect(() => {
    dispatch({ type: types.PRODUCT_LOAD_INIT });
    itemCollection
      .get()
      .then((querySnapshot) => {
        // const products = db.collection("items", (ref) =>
        //   ref.where("stock", ">", "0")
        //);
        const products = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        dispatch({ type: types.PRODUCT_LOAD_COMPLETED, payload: products });
      })
      .catch((error) => console.error("Firesotor error: ", error));
  }, [dispatch]);

  const categoryFilter = () => {
    if (!props.categoryId) {
      return productState.products;
    } else {
      return productState.products.filter(
        (product) => product.categoria === props.categoryId
      );
    }
  };

  return (
    <>
      <PathBar ruta={props.categoryId || ""} />
      <div className="div-countainer">
        {productState.status === status.LOADING && (
          <div style={{ position: "absolute" }} style={{ textAlign: "center" }}>
            {" "}
            Cargando...{" "}
          </div>
        )}

        {productState.searchString.length === 0 &&
          categoryFilter().length === 0 &&
          productState.status === status.COMPLETED && (
            <p>Esta categoría actualmente no tiene productos</p>
          )}

        {productState.searchString.length === 0 &&
          categoryFilter().map((prod) => <Item key={prod.id} product={prod} />)}

        {productState.searchString.length > 0 &&
          productState.products
            .filter(
              (p) =>
                p.marca
                  .toLowerCase()
                  .indexOf(productState.searchString.toLowerCase()) > -1 ||
                p.nombre
                  .toLowerCase()
                  .indexOf(productState.searchString.toLowerCase()) > -1
            )
            .map((prod) => <Item key={prod.id} product={prod} />)}
      </div>
    </>
  );
}
