import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  return (
    <main className="page-connexion">
      <div className="form-container">
        <section className="form-section">
          <article id="login_image" className="login-image">
            Sankliché
          </article>
          <article id="login" className="login-form">
            <h1 className="form-title">Connexion</h1>
            <form className="form">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                autoComplete="username"
                name="email"
                id="email"
                className="form-input"
                placeholder="Exemple : johndoe@email.com"
              />
              <label htmlFor="password" className="form-label">
                Mot de passe
              </label>
              <input
                type="password"
                autoComplete="current-password"
                name="password"
                id="password"
                className="form-input"
                placeholder="Exemple : 123456"
              />
              <Link className="form-button-link" to="/">
                <button type="submit" className="form-button">
                  Se connecter
                </button>
              </Link>
              <p className="form-error">Email ou mot de passe incorrect</p>
            </form>
            <div className="form-links">
              <p className="form-link-text">Vous n'avez pas de compte ?</p>
              <a href="/register" className="form-link">
                Créer un compte
              </a>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

export default Login;
