import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Challenges from "./pages/Challenges";
import ChallengesDetails from "./components/ChallengesDetails";
import Profil from "./pages/Profil";
import Tips from "./pages/Tips";
import Classement from "./pages/Classement";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenges/:id" element={<ChallengesDetails />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/classement" element={<Classement />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
