import React, { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [activeNavItem, setActiveNavItem] = useState("home");

  const handleNavItemClick = (itemId) => {
    setActiveNavItem(itemId);
  };

  return (
    <div className="footer">
      <button
        type="button"
        className={activeNavItem === "home" ? "button-nav" : "button-nav-not"}
        onClick={() => handleNavItemClick("home")}
      >
        <div
          type="button"
          className={
            activeNavItem === "home" ? "button-nav-not-home" : "button-nav-home"
          }
        />
        Accueil
      </button>
      <button
        type="button"
        className={activeNavItem === "target" ? "button-nav" : "button-nav-not"}
        onClick={() => handleNavItemClick("target")}
      >
        <div
          type="button"
          className={
            activeNavItem === "target"
              ? "button-nav-not-target"
              : "button-nav-target"
          }
        />
        <p>Défis</p>
      </button>
      <button
        type="button"
        className={
          activeNavItem === "classement" ? "button-nav" : "button-nav-not"
        }
        onClick={() => handleNavItemClick("classement")}
      >
        <div
          type="button"
          className={
            activeNavItem === "classement"
              ? "button-nav-not-classement"
              : "button-nav-classement"
          }
        />
        <p>Classement</p>
      </button>
      <button
        type="button"
        className={
          activeNavItem === "button-tips" ? "button-nav" : "button-nav-not"
        }
        onClick={() => handleNavItemClick("button-tips")}
      >
        <div
          type="button"
          className={
            activeNavItem === "button-tips"
              ? "button-nav-not-tips"
              : "button-nav-tips"
          }
        />
        <p>Défis</p>
      </button>
    </div>
  );
}

export default Footer;
