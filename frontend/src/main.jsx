import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Challenges from "./pages/Challenges";
import Profil from "./pages/Profil";
import Tips from "./pages/Tips";
import Classement from "./pages/Classement";
import ClassementTeam from "./pages/ClassementTeam";
import ChallengeDetails from "./components/ChallengeDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route exact path="/challenge/:id" element={<ChallengeDetails />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/classement" element={<Classement />} />
        <Route path="/classement/team" element={<ClassementTeam />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
