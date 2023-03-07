import { useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import { UserContext } from "../store/user-context";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Challenges from "./pages/Challenges";
import Profil from "./pages/Profil";
import Tips from "./pages/Tips";
import Classement from "./pages/Classement";
import ClassementTeam from "./pages/ClassementTeam";
import ChallengeDetails from "./components/ChallengeDetails";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const { token } = useContext(UserContext);

  const [isActive, setIsActive] = useState(false);
  const switchPage = () => {
    setIsActive(true);
  };
  const resForm = () => {
    setIsActive(false);
  };

  const login = (
    <div className="log-page">
      <Login />
      <button onClick={switchPage} type="button">
        Première fois ? Créez votre compte !
      </button>
    </div>
  );
  const content = (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route exact path="/challenge/:id" element={<ChallengeDetails />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/classement" element={<Classement />} />
        <Route path="/classement/team" element={<ClassementTeam />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
      <Footer />
    </>
  );

  return (
    <>
      {!token && !isActive && login}
      {!token && isActive && <Register onRes={resForm} />}
      {token && content}
    </>
  );
}
export default App;
