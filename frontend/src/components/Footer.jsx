import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  const [activeTab, setActiveTab] = useState("home");
  function handleTabClick() {
    setActiveTab(activeTab);
  }
  return (
    <div className="footer">
      <nav className="navbar">
        <NavLink
          to="/"
          activeclassname="active"
          onClick={() => handleTabClick("home")}
          className="nav-link"
        >
          <p className="home-link">Acceuil</p>
        </NavLink>
        <NavLink
          to="/challenges"
          activeclassname="active"
          onClick={() => handleTabClick("defis")}
          className="nav-link-defis"
        >
          <p className="defis-link">Défis</p>
        </NavLink>
        <NavLink
          to="/classement"
          activeclassname="active"
          onClick={() => handleTabClick("classement")}
          className="nav-link-classement"
        >
          <p className="classement-link">Classement</p>
        </NavLink>
        <NavLink
          to="/tips"
          activeclassname="active"
          onClick={() => handleTabClick("tips")}
          className="nav-link-tips"
        >
          <p className="tips-link">Astuces</p>
        </NavLink>
      </nav>
    </div>
  );
}

export default Footer;
