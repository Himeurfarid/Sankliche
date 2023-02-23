import { Link } from "react-router-dom";
import React, { useState } from "react";
import home from "../assets/home.png";
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
      <Link to="/">
        <button className="button-nav" type="button" onClick={handleHomeClick}>
          <img src={homeIcon} alt="home" className="home" />
        </button>
      </Link>

      <Link to="/challenges">
        <button
          className="button-nav"
          type="button"
          onClick={handleTargetClick}
        >
          <img src={targetIcon} alt="target" className="target" />
        </button>
      </Link>

      <Link to="/classement">
        <button
          className="button-nav"
          type="button"
          onClick={handleClassementClick}
        >
          <img src={classementIcon} alt="classement" className="classement" />
        </button>
      </Link>

      <Link to="/tips">
        <button className="button-nav" type="button" onClick={handleTipsClick}>
          <img src={tipsIcon} alt="tips" className="tips" />
        </button>
      </Link>
    </div>
  );
}

export default Footer;
