import "./Pathbar.scss";
import { Link } from "react-router-dom";

const Pathbar = ({ ruta }) => {
  return (
    <header>
      <nav>
        <p>
          <Link to="/" className="home">
            Home
          </Link>
          /{ruta}
        </p>
      </nav>
    </header>
  );
};

export default Pathbar;
