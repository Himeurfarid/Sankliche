import Card from "../components/Card";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <div className="section">
        <div className="title">Sankliché</div>
        <div className="title">
          Une nouvelle façon d'apprendre la langue de façon ludique où l'on peut
          apprendre seul ou en équipe. :D
        </div>
        <button type="button" className="button">
          Réaliser un défi
        </button>
        <button type="button" className="button">
          Rejoindre une équipe
        </button>
      </div>
      <div className="section">
        <div className="title">Mes stats</div>
        <Card />
      </div>
      <div className="section">
        <div className="title">Activités récentes</div>
        <Card />
      </div>
    </main>
  );
}
