import Navbar from "../Navbar/Navbar";
import Cartwidget from "../Cartwidget/Cartwidget";
import logoHunko from "../../assets/HunkoLogo.jpg";
import "./Header.scss";
import { useState, useEffect } from "react";

const Header = (props) => {
    const [estaAbierto, setEstaAbierto] = useState(false);

    const handleClick = () => {
    setEstaAbierto(!estaAbierto);
    };
    return(
        <header>
            <hr/>
            <div className="div-buscar-carro">
                <div className="buscador">
                    <img src={logoHunko} alt="logoHunko"/>
                    <input type="text" placeholder="¿Qué estás buscando?"/>
                    <div className="buscar">🔍</div>
                </div>
                    <button className="boton" onClick={handleClick}>
                        <Cartwidget/>
                    </button>
                    {
                        estaAbierto && props.children
                    }      
               
            </div>    
                <hr/>
            <Navbar/>
        </header>
    )
}

export default Header;