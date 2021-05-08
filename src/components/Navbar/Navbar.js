import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

//Iconos
import { MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";

//Componentes
import Cartwidget from "../Cartwidget/Cartwidget";
import ItemListCarrito from "../ItemListCarrito/ItemListCarrito";
import Pathbar from "../Pathbar/Pathbar"

//Imags
import logoHunko from "../../assets/HunkoLogo.jpg";
import logoHunkoBN from "../../assets/HunkoLogoBN.png";
import lupa from "../../assets/lupa.png";

//Paginas
// import Home from "./pages/Home";
// import Carrito from "./pages/Carrito";
// import Dermocosmetica from "./pages/Dermocosmetica";
// import Farmacia from "./pages/Farmacia";
// import Maquillaje from "./pages/Maquillaje";
// import Perfumeria from "./pages/Perfumeria";
// import Ofertas from "./pages/Ofertas";

//Style
import "./Navbar.scss";

const Navbar = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const [widthW, setWidthW] = useState(window.innerWidth);

    const handleClick = () => {
    setIsOpen(!IsOpen);
    };

    useEffect( ()=>{
        setWidthW(window.innerWidth)
    }, [widthW])

    const [nav, setNav] = useState(false)

    const handleNav = () => {
    setNav(!nav);
    }
//todo: grabacion 1:10 de Router y Navegacion para hacer el componente BUSQUEDA
    return(
       <nav className="nav-container">
            <hr/>
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
                                        <NavLink exact to="/" onClick={handleNav} className="sidenav__link" >
                                        Inicio
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/category/Perfumeria" onClick={handleNav} className="sidenav__link">
                                        Perfumeria
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/category/Dermocosmética" onClick={handleNav} className="sidenav__link">
                                        Dermocosmética
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/category/Farmacia" onClick={handleNav} className="sidenav__link">
                                        Farmacia
                                        </NavLink>
                                    </li>
                                    <hr />
                                    <li>
                                        <NavLink to="/category/oferta" onClick={handleNav} className="sidenav__link">
                                        Ofertas
                                        </NavLink>
                                    </li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <MdMenu onClick={handleNav} className="sidenav__open" size="2rem" />
                        )
                    }
                </div>
                <div className="buscador">
                   {
                       widthW < 430 ? (
                           <img src={logoHunkoBN} alt="img"/>
                       ) : (
                        <img src={logoHunko} alt="img"/>
                       )
                   }
                    <input type="text" placeholder="¿Qué estás buscando?"/>
                    <button className="lupa"><img src={lupa} alt="lupa"/>
                    </button> 
                </div>
                <button className="boton-carro" onClick={handleClick}>
                    <Cartwidget/>
                </button>
                {
                    IsOpen && <ItemListCarrito/>// todo : poner un Link dentro de ese ItemListCarrito
                }      
               
            </div>    
            <hr/>
            <div className="main-categories">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active-navlink" className="navLink">
                        Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/oferta" activeClassName="active-navlink" className="navLink">
                        Ofertas
                        </NavLink>
                    </li>
                    <li><NavLink to="/category/dermocosmetica" activeClassName="active-navlink" className="navLink">
                        Dermocosmetica
                        </NavLink>
                    </li>
                    <li><NavLink to="/category/perfumeria" activeClassName="active-navlink" className="navLink">
                        Perfumeria
                        </NavLink>
                    </li>
                    <li><NavLink to="/category/farmacia" activeClassName="active-navlink" className="navLink">
                        Farmacia
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Pathbar/>
        </nav>

    )
}


export default Navbar;
