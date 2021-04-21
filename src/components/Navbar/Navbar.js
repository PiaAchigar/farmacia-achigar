//import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
    return(
       <nav>
          <div className="menu-desplegable">

          </div>
          <div className="menu-categorias">
              <ul>
                  <li>Perfumeria</li>
                  <li>Dermocosmética</li>
                  <li>Farmacia</li>
                  <li>Ofertas</li>
              </ul>
          </div>
       </nav>
       )
}


export default Navbar;