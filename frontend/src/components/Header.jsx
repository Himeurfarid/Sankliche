import React, { useState } from "react";
import { Link } from "react-router-dom";
import profil from "../assets/profil.png";

import "../styles/Header.css";

function Header() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="header-app">
      <Link to="/">
        <img
          className="logo-sankliche"
          src="https://static.wixstatic.com/media/8f8b51_a6745be895cc420f83ca3d402922069f~mv2.png/v1/fill/w_94,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logosk.png"
          alt="logosanklché"
        />
      </Link>
      <div className="link-profil">
        <button className="button-profil" type="button" onClick={togglePopup}>
          <img src={profil} alt="profil" className="profil" />
        </button>
        {showPopup && (
          <div className="popup">
            <Link to="/profil">
              <button className="button-popup" type="button">
                Profil
              </button>
            </Link>
            <button
              className="button-popup"
              type="button"
              onClick={togglePopup}
            >
              Déconnexion
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
