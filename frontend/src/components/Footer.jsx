import { Link } from "react-router-dom";
import home from "../assets/home.png";
import target from "../assets/cible.png";
import classement from "../assets/classement.png";
import tips from "../assets/tips.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        <button className="button-nav" type="button">
          <img src={home} alt="home" className="home" />
        </button>
      </Link>

      <Link to="/challenges">
        <button className="button-nav" type="button">
          <img src={target} alt="target" className="target" />
        </button>
      </Link>

      <Link to="/classement">
        <button className="button-nav" type="button">
          <img src={classement} alt="classement" className="classement" />
        </button>
      </Link>

      <Link to="/tips">
        <button className="button-nav" type="button">
          <img src={tips} alt="tips" className="tips" />
        </button>
      </Link>
    </div>
  );
}

export default Footer;
