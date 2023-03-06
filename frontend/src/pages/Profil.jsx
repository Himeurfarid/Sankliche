import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Profil.css";
import PictureDefault from "../assets/photo-profil-default.jpg";

const DEFAULT_PICTURE = PictureDefault;

function Profil() {
  const [picture, setPicture] = useState(DEFAULT_PICTURE);
  const fileInputRef = useRef();

  function handlePictureChange(event) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();

    function handleReaderLoaded(e) {
      setPicture(e.target.result);
    }

    reader.onload = handleReaderLoaded;

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  }

  function handlePictureClick() {
    fileInputRef.current.click();
  }

  function handlePictureKeyDown(event) {
    if (event.key === "Enter") {
      handlePictureClick();
    }
  }

  return (
    <>
      <Header />
      <div className="topProfil">
        <div
          className="profil-picture"
          onClick={handlePictureClick}
          onKeyDown={handlePictureKeyDown}
          tabIndex="0"
          role="button"
        >
          {picture ? (
            <img src={picture} alt="" className="picture" />
          ) : (
            <div className="picture-placeholder">Sélectionner une photo</div>
          )}
        </div>
        <label htmlFor="fileInput">Sélectionner une photo :</label>
        <input
          className="input-profile"
          type="file"
          id="fileInput"
          onChange={handlePictureChange}
          ref={fileInputRef}
        />

        <div className="names">
          <h1 className="styleName">Alexis</h1>
          <h2 className="styleName">Durin</h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profil;
