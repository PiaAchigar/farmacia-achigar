import Navbar from "../Navbar/Navbar";
import Cartwidget from "../Cartwidget/Cartwidget";
import logoHunko from "../../assets/HunkoLogo.jpg";
import ItemListCarrito from "../ItemListCarrito/ItemListCarrito";
import "./Header.scss";
import { useState } from "react";

const Header = () => {
    const [IsOpen, setIsOpen] = useState(false);

    const handleClick = () => {
    setIsOpen(!IsOpen);
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
                        IsOpen && <ItemListCarrito/>
                    }      
               
            </div>    
                <hr/>
            <Navbar/>
        </header>
    )
}

export default Header;