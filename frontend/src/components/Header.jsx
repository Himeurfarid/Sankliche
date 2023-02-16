import { Link } from "react-router-dom";
import profil from "../assets/profil.png";

import "../styles/Header.css";

function Header() {
  return (
    <div className="header-app">
      <img
        className="logosankliche"
        src="https://static.wixstatic.com/media/8f8b51_a6745be895cc420f83ca3d402922069f~mv2.png/v1/fill/w_94,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logosk.png"
        alt="logosanklché"
      />
      <div className="linkprofil">
        <Link to="/profil">
          <button className="buttonprofil" type="button">
            <img src={profil} alt="profil" className="profil" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
