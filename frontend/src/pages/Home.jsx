import Card from "../components/Card";

export default function Home() {
  return (
    <main>
      <div className="section">
        <div className="title">Sankliché</div>
        <div className="title">
          Une nouvelle façcon d'apprendre la langue de façon ludique où l'on
          peut apprendre seul ou en équipe :D
        </div>
        <div className="title">Réaliser und défi</div>
        <div className="title">Rejoindre une équipe</div>
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
