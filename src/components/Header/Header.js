import logoHunko from "../../assets/HunkoLogo.jpg";
import "./Header.scss";

const Header = () => {
    return(
        <header>
            <hr/>
            <div>
                <img src={logoHunko} alt="logoHunko"/>
                <input type="text" placeholder="Buscar"/>
                <div className="buscar">🔍</div>
            </div>
            <hr/>
        </header>
    )
}

export default Header;