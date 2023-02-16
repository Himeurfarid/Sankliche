import Card from "../components/Card";

export default function Home() {
  return (
    <main>
      <div className="section">
        <div className="title">Objectif du jour</div>
        <Card />
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
