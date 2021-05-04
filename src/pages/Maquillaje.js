import React from "react";
import { useParams } from "react-router";

import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Maquillaje = () => {
  const {maquillaje} = useParams()
  return (
    <div className="page-wrapper">
      <h1>Pagina de Maquillaje</h1>
      <ItemListContainer id={maquillaje}/>
    </div>
  );
};

export default Maquillaje;
