import home from "../assets/home.png";
import cible from "../assets/cible.png";
import profil from "../assets/profil.png";
import tips from "../assets/tips.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <button type="button">
        <img src={home} alt="home" className="home" />
      </button>
      <button type="button">
        <img src={cible} alt="cible" className="cible" />
      </button>
      <button type="button">
        <img src={profil} alt="profil" className="profil" />
      </button>
      <button type="button">
        <img src={tips} alt="tips" className="tips" />
      </button>
    </div>
  );
}

export default Footer;
