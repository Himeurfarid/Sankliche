import { Link } from "react-router-dom";
import React, { useState } from "react";
import home from "../assets/acceuil.png";
import home2 from "../assets/home2.png";
import target from "../assets/target.png";
import target2 from "../assets/target2.png";
import classement from "../assets/classement.png";
import classement2 from "../assets/classement2.png";
import tips from "../assets/tips.png";
import tips2 from "../assets/tips2.png";
import "../styles/Footer.css";

function Footer() {
  const [homeIcon, setHomeIcon] = useState(home);
  const [targetIcon, setTargetIcon] = useState(target);
  const [classementIcon, setClassementIcon] = useState(classement);

  const handleHomeClick = () => {
    setHomeIcon(home2);
  };

  const handleTargetClick = () => {
    setTargetIcon(target2);
  };

  const handleClassementClick = () => {
    setClassementIcon(classement2);
  };

  const [tipsIcon, setTipsIcon] = useState(tips);
  const handleTipsClick = () => {
    setTipsIcon(tips2);
  };

  return (
    <div className="footer">
      <button className="button-nav" type="button" onClick={handleHomeClick}>
        <Link to="/">
          <img src={homeIcon} alt="home" className="home-is-active" />
          <p>Acceuil</p>
        </Link>
      </button>
      <button className="button-nav" type="button" onClick={handleTargetClick}>
        <Link to="/challenges">
          <img src={targetIcon} alt="target" className="target" />
          <p>Défis</p>
        </Link>
      </button>
      <button
        className="button-nav"
        type="button"
        onClick={handleClassementClick}
      >
        <Link to="/classement">
          <img src={classementIcon} alt="classement" className="classement" />
          <p>Classement</p>
        </Link>
      </button>
      <button className="button-nav" type="button" onClick={handleTipsClick}>
        <Link to="/tips">
          <img src={tipsIcon} alt="tips" className="tips" />
          <p>Astuces</p>
        </Link>
      </button>
    </div>
  );
}

export default Footer;
