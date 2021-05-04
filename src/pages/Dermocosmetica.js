import React from "react";
import { useParams } from "react-router";

//Componentes
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Dermocosmetica = () => {
  const {dermocosmetica} = useParams()
  return (
    <div className="page-wrapper">
      <h1>Pagina de Dermocosmetica</h1>
      <ItemListContainer id={dermocosmetica}/>
    </div>
  );
};

export default Dermocosmetica;
