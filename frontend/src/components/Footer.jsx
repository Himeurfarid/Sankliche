import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  const [activeNavItem, setActiveNavItem] = useState("home");
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = () => {
    setActiveTab(activeTab);
  };
  const handleNavItemClick = () => {
    setActiveNavItem(activeNavItem);
  };

  return (
    <div className="footer">
      <NavLink
        to="/"
        activeclassname="activelink"
        onClick={() => handleTabClick("home")}
      >
        <div className="button-link">
          <button
            type="button"
            className={
              activeNavItem === "home" ? "button-nav" : "button-nav-not"
            }
            onClick={() => handleNavItemClick("home")}
          >
            <div
              className={
                activeNavItem === "home"
                  ? "button-nav-not-home"
                  : "button-nav-home"
              }
            />
            Accueil
          </button>
        </div>
      </NavLink>

      <NavLink
        to="/challenges"
        activeclassname="activelink"
        onClick={() => handleTabClick("defis")}
      >
        <div className="button-link">
          <button
            type="button"
            className={
              activeNavItem === "target" ? "button-nav" : "button-nav-not"
            }
            onClick={() => handleNavItemClick("target")}
          >
            <div
              className={
                activeNavItem === "target"
                  ? "button-nav-not-target"
                  : "button-nav-target"
              }
            />

            <p>Défis</p>
          </button>
        </div>
      </NavLink>

      <NavLink
        to="/classement"
        activeclassname="activelink"
        onClick={() => handleTabClick("classement")}
      >
        <div className="button-link">
          <button
            type="button"
            className={
              activeNavItem === "classement" ? "button-nav" : "button-nav-not"
            }
            onClick={() => handleNavItemClick("classement")}
          >
            <div
              className={
                activeNavItem === "classement"
                  ? "button-nav-not-classement"
                  : "button-nav-classement"
              }
            />

            <p>Classement</p>
          </button>
        </div>
      </NavLink>

      <NavLink
        to="/tips"
        activeclassname="activelink"
        onClick={() => handleTabClick("defis")}
      >
        <div className="button-link">
          <button
            type="button"
            className={
              activeNavItem === "button-tips" ? "button-nav" : "button-nav-not"
            }
            onClick={() => handleNavItemClick("button-tips")}
          >
            <div
              className={
                activeNavItem === "button-tips"
                  ? "button-nav-not-tips"
                  : "button-nav-tips"
              }
            />
            <p>Défis</p>
          </button>
        </div>
      </NavLink>
    </div>
  );
}

export default Footer;
