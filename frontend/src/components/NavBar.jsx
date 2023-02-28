import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/">
        <button className="button-nav" type="button">
          Acceuil
        </button>
      </Link>
      <Link to="/challenges">
        <button className="button-nav" type="button">
          Défis
        </button>
      </Link>

      <Link to="/classement">
        <button className="button-nav" type="button">
          Classement
        </button>
      </Link>
      <Link to="/tips">
        <button className="button-nav" type="button">
          Astuces
        </button>
      </Link>
    </nav>
  );
}

export default NavBar;
