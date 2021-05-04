import React from "react";
import { useParams } from "react-router";

import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Perfumeria = () => {
  const {perfumes} = useParams()
  return (
    <div className="page-wrapper">
      <h1>Pagina de Perfumeria</h1>
      <ItemListContainer id={perfumes}/>
    </div>
  );
};

export default Perfumeria;
