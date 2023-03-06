import React from "react";
import "../styles/ProfilePicture.css";

function ProfilePicture() {
  return (
    <div className="profile-picture">
      <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg"
      />
      <p className="add-profile-picture">Ajouter une photo de profil</p>
    </div>
  );
}
export default ProfilePicture;
