import React from "react";
import "../styles/RegisterForm.css";

function RegisterForm() {
  return (
    <form className="form-register">
      <label htmlFor="lastname">Nom</label>
      <input
        className="input-sign-up"
        type="lastname"
        name="lastname"
        id="lastname"
        placeholder="Doe"
      />

      <label htmlFor="fistname">Prénom</label>
      <input
        className="input-sign-up"
        type="fistname"
        name="fistname"
        id="fistname"
        placeholder="John"
      />

      <label htmlFor="email">Email</label>
      <input
        className="input-sign-up"
        type="text"
        autoComplete="username"
        name="email"
        id="email"
        placeholder="johnDoe@email.com"
      />

      <label htmlFor="password">Mot de passe</label>

      <input
        className="input-sign-up"
        type="text"
        autoComplete="new-password"
        name="password"
        id="password"
        placeholder="********"
      />

      <label htmlFor="passwordConfirm" className="font-bold">
        Confirmer le mot de passe
      </label>

      <input
        className="input-sign-up"
        type="text"
        autoComplete="new-password"
        name="passwordConfirm"
        id="passwordConfirm"
        placeholder="********"
      />

      <button type="submit" className="sign-up">
        S'inscrire
      </button>
    </form>
  );
}

export default RegisterForm;
