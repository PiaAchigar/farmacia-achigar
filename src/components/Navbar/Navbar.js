import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { types } from "./../../state";
//Iconos
import { MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";

//Componentes
import { CartContext } from "../../CartContext";
import Cartwidget from "../Cartwidget/Cartwidget";
import ItemListCarrito from "../ItemListCarrito/ItemListCarrito";

//Imags
import logoHunko from "../../assets/HunkoLogo.jpg";
import logoHunkoBN from "../../assets/HunkoLogoBN.png";

//Style
import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const [IsOpen, setIsOpen] = useState(false);
  const [widthW, setWidthW] = useState(window.innerWidth);
  const { cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const handleClick = () => {
    setIsOpen(!IsOpen);
  };

  const calulateQuantity = (cartArray) => {
    const total = cartArray.reduce(
      (totalQuantity, product) => (totalQuantity += product.quantity),
      0
    );
    setQuantity(total);
  };

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    setWidthW(window.innerWidth);
    calulateQuantity(cart);
  }, [widthW, cart]);

  return (
    <nav className="nav-container">
      <hr />
      <div className="ham-buscar-carro">
        <div className="ham">
          {nav ? (
            <>
              <div className="bg-close" onClick={handleNav}></div>
              <div className="sidenav">
                <div className="sidenav__close" onClick={handleNav}>
                  <MdClose className="close-icon" size="1.5rem" />
                </div>
                <ul>
                  <li>
                    <NavLink
                      exact
                      to="/"
                      onClick={handleNav}
                      className="sidenav__link"
                    >
                      Inicio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/category/perfumeria"
                      onClick={handleNav}
                      className="sidenav__link"
                    >
                      Perfumeria
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/category/dermocosmética"
                      onClick={handleNav}
                      className="sidenav__link"
                    >
                      Dermocosmética
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/category/farmacia"
                      onClick={handleNav}
                      className="sidenav__link"
                    >
                      Farmacia
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink
                      to="/category/oferta"
                      onClick={handleNav}
                      className="sidenav__link"
                    >
                      Ofertas
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <MdMenu onClick={handleNav} className="sidenav__open" size="2rem" />
          )}
        </div>
        <div className="buscador">
          {widthW < 430 ? (
            <img src={logoHunkoBN} alt="img" />
          ) : (
            <img src={logoHunko} alt="img" />
          )}
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            onChange={(e) => {
              dispatch({
                type: types.SET_SEARCH_STRING,
                payload: e.target.value,
              });
            }}
          />
        </div>
        <button className="boton-carro" onClick={handleClick}>
          <Cartwidget itemsQuantity={quantity} />
        </button>
        {IsOpen && <ItemListCarrito setIsOpen={setIsOpen} />}
      </div>
      <hr />
      <div className="main-categories">
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="active-navlink"
              className="navLink"
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/oferta"
              activeClassName="active-navlink"
              className="navLink"
            >
              Ofertas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/dermocosmetica"
              activeClassName="active-navlink"
              className="navLink"
            >
              Dermocosmetica
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/perfumeria"
              activeClassName="active-navlink"
              className="navLink"
            >
              Perfumeria
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/farmacia"
              activeClassName="active-navlink"
              className="navLink"
            >
              Farmacia
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// {quantity > 0 && (
//   <button className="boton-carro" onClick={handleClick}>
//     <Cartwidget itemsQuantity={quantity} />
//   </button>
// )}
