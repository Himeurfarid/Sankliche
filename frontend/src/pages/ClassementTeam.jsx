import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Classement.css";

function Challenges() {
  const [isActiveTeam, setIsActiveTeam] = useState();

  function handleClickActive() {
    setIsActiveTeam(!isActiveTeam);
  }
  return (
    <div>
      <Header />
      <div className="container-classement">
        <h1 className="header-rank-title">Classements</h1>
        <div className="container-mode">
          <div className="header-rank">
            <button
              id="active"
              type="button"
              onClick={handleClickActive}
              label="team"
            >
              <Link to="/classement">
                <div className="title-classement">Joueurs</div>
              </Link>
            </button>
            <Link to="/classement/team">
              <div className={isActiveTeam ? "title-classement" : "active"}>
                Equipes
              </div>
            </Link>
          </div>
        </div>
        <div className="container-player-team">
          <div className="ranking">
            <table className="table">
              <tbody className="body-player">
                <tr className="player">
                  <td className="position">1</td>
                  <td className="name">Equipe 1</td>
                  <td className="score">1000</td>
                </tr>
                <tr className="player">
                  <td className="position">2</td>
                  <td className="name">Equipe 2</td>
                  <td className="score">800</td>
                </tr>
                <tr className="player">
                  <td className="position">3</td>
                  <td className="name">Equipe 3</td>
                  <td className="score">700</td>
                </tr>
                <tr className="player">
                  <td className="position">4</td>
                  <td className="name">Equipe 4</td>
                  <td className="score">600</td>
                </tr>
                <tr className="player">
                  <td className="position">5</td>
                  <td className="name">Equipe 5</td>
                  <td className="score">550</td>
                </tr>
                <tr className="player">
                  <td className="position">6</td>
                  <td className="name">Equipe 6</td>
                  <td className="score">500</td>
                </tr>
                <tr className="player">
                  <td className="position">7</td>
                  <td className="name">Equipe 7</td>
                  <td className="score">450</td>
                </tr>
                <tr className="player">
                  <td className="position">8</td>
                  <td className="name">Equipe 8</td>
                  <td className="score">400</td>
                </tr>
                <tr className="player">
                  <td className="position">9</td>
                  <td className="name">Equipe 9</td>
                  <td className="score">350</td>
                </tr>
                <tr className="player">
                  <td className="position">10</td>
                  <td className="name">Equipe 10</td>
                  <td className="score">300</td>
                </tr>
                <tr className="player">
                  <td className="position">11</td>
                  <td className="name">Equipe 11</td>
                  <td className="score">250</td>
                </tr>
                <tr className="player">
                  <td className="position">12</td>
                  <td className="name">Equipe 12</td>
                  <td className="score">200</td>
                </tr>
                <tr className="player">
                  <td className="position">13</td>
                  <td className="name">Equipe 13</td>
                  <td className="score">150</td>
                </tr>
                <tr className="player">
                  <td className="position">14</td>
                  <td className="name">Equipe 14</td>
                  <td className="score">100</td>
                </tr>
                <tr className="player">
                  <td className="position">15</td>
                  <td className="name">Equipe 15</td>
                  <td className="score">50</td>
                </tr>
                <tr className="player">
                  <td className="position">16</td>
                  <td className="name">Equipe 16</td>
                  <td className="score">40</td>
                </tr>
                <tr className="player">
                  <td className="position">17</td>
                  <td className="name">Equipe 17</td>
                  <td className="score">40</td>
                </tr>
                <tr className="player">
                  <td className="position">18</td>
                  <td className="name">Equipe 18</td>
                  <td className="score">40</td>
                </tr>
                <tr className="player">
                  <td className="position">19</td>
                  <td className="name">Equipe 19</td>
                  <td className="score">30</td>
                </tr>
                <tr className="player">
                  <td className="position">20</td>
                  <td className="name">Equipe 20</td>
                  <td className="score">30</td>
                </tr>
                <tr className="player">
                  <td className="position">21</td>
                  <td className="name">Equipe 21</td>
                  <td className="score">30</td>
                </tr>
                <tr className="player">
                  <td className="position">22</td>
                  <td className="name">Equipe 22</td>
                  <td className="score">30</td>
                </tr>
                <tr className="player">
                  <td className="position">23</td>
                  <td className="name">Equipe 23</td>
                  <td className="score">20</td>
                </tr>
                <tr className="player">
                  <td className="position">24</td>
                  <td className="name">Equipe 24</td>
                  <td className="score">20</td>
                </tr>
                <tr className="player">
                  <td className="position">25</td>
                  <td className="name">Equipe 25</td>
                  <td className="score">20</td>
                </tr>
                <tr className="player">
                  <td className="position">26</td>
                  <td className="name">Equipe 26</td>
                  <td className="score">20</td>
                </tr>
                <tr className="player">
                  <td className="position">27</td>
                  <td className="name">Equipe 27</td>
                  <td className="score">20</td>
                </tr>
                <tr className="player">
                  <td className="position">28</td>
                  <td className="name">Equipe 28</td>
                  <td className="score">20</td>
                </tr>
                <tr className="player">
                  <td className="position">29</td>
                  <td className="name">Equipe 29</td>
                  <td className="score">20</td>
                </tr>
                <tr className="player">
                  <td className="position">30</td>
                  <td className="name">Equipe 30</td>
                  <td className="score">20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Challenges;
