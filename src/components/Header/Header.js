import Navbar from "../Navbar/Navbar";
import Cartwidget from "../Cartwidget/Cartwidget";
import logoHunko from "../../assets/HunkoLogo.jpg";
import logoHunkoBN from "../../assets/HunkoLogoBN.png";
import lupa from "../../assets/lupa.png";
import ItemListCarrito from "../ItemListCarrito/ItemListCarrito";
import "./Header.scss";
import { useState, useEffect } from "react";

const Header = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const [widthW, setWidthW] = useState(window.innerWidth);

    const handleClick = () => {
    setIsOpen(!IsOpen);
    };

    useEffect( ()=>{
        setWidthW(window.innerWidth)
    }, [widthW])
    
    return(
        <header>
            <hr/>
            <div className="ham-buscar-carro">
                <div className="ham">
                    
                </div>
                <div className="buscador">
                   {
                       widthW < 430 ? (
                           <img src={logoHunkoBN} alt="img"/>
                       ) : (
                        <img src={logoHunko} alt="img"/>
                       )
                   }
                        {/* <img src={logoHunkoBN} srcSet={`${logoHunkoBN} 300w, ${logoHunko} 768w, ${logoHunko} 1280w`} alt="logoHunkoBN" /> */}
                        {/* <img src={logoHunko} media="(min-width: 768px)" alt="logoHunko"/> */}

                    
                    <input type="text" placeholder="¿Qué estás buscando?"/>
                    <button className="lupa"><img src={lupa} alt="lupa"/>
                    </button> 
                </div>
                    <button className="boton-carro" onClick={handleClick}>
                        <Cartwidget/>
                    </button>
                    {
                        IsOpen && <ItemListCarrito/>
                    }      
               
            </div>    
                <hr/>
            <Navbar/>
        </header>
    )
}

export default Header;