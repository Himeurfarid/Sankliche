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
        <p>Acceuil</p>
      </button>
      <button
        type="button"
        className={activeNavItem === "defis" ? "button-nav" : "button-nav-not"}
        onClick={() => handleNavItemClick("defis")}
      >
        <p>Défis</p>
      </button>
      <button
        type="button"
        className={
          activeNavItem === "classement" ? "button-nav" : "button-nav-not"
        }
        onClick={() => handleNavItemClick("classement")}
      >
        <p>Classement</p>
      </button>
      <button
        type="button"
        className={
          activeNavItem === "button-tips" ? "button-nav" : "button-nav-not"
        }
        onClick={() => handleNavItemClick("button-tips")}
      >
        <p>Astuces</p>
      </button>
    </div>
  );
}

export default Footer;
