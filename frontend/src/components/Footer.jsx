import { Link } from "react-router-dom";
import home from "../assets/home.png";
import cible from "../assets/cible.png";
import profil from "../assets/profil.png";
import tips from "../assets/tips.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        <button type="button">
          <img src={home} alt="home" className="home" />
        </button>
      </Link>

      <Link to="/challenges">
        <button type="button">
          <img src={cible} alt="cible" className="cible" />
        </button>
      </Link>

      <Link to="/profil">
        <button type="button">
          <img src={profil} alt="profil" className="profil" />
        </button>
      </Link>

      <Link to="/tips">
        <button type="button">
          <img src={tips} alt="tips" className="tips" />
        </button>
      </Link>
    </div>
  );
}

export default Footer;
