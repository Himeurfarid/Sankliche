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
        <button
          type="button"
          className={
            activeNavItem === "home" ? "button-nav-not-home" : "button-nav-home"
          }
          label="home-icone"
        />
        <p>Acceuil</p>
      </button>
      <button
        type="button"
        className={activeNavItem === "target" ? "button-nav" : "button-nav-not"}
        onClick={() => handleNavItemClick("target")}
      >
        <button
          type="button"
          className={
            activeNavItem === "target"
              ? "button-nav-not-target"
              : "button-nav-target"
          }
          label="icon-home"
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
        <button
          type="button"
          className={
            activeNavItem === "classement"
              ? "button-nav-not-classement"
              : "button-nav-classement"
          }
          label="icon-home"
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
        <button
          type="button"
          className={
            activeNavItem === "button-tips"
              ? "button-nav-not-tips"
              : "button-nav-tips"
          }
          label="icon-home"
        />
        <p>Astuces</p>
      </button>
    </div>
  );
}

export default Footer;
