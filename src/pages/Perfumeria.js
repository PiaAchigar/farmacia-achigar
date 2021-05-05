import React from "react";

import {Link} from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Perfumeria = () => {
  return (
    <div className="page-wrapper">
      <h1>Pagina de Perfumeria</h1>
      <Link to ="/itemlistcontainer/:idCategory">
        <ItemListContainer />
      </Link>
      
    </div>
  );
};

export default Perfumeria;
