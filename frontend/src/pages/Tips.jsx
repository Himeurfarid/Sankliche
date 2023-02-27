import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Tips.css";

function Tips() {
  return (
    <>
      <Header />
      <section className="section-container">
        <h2 className="container-title">Lisez en français</h2>
        <p className="container-text">
          Lire des textes en français est un excellent moyen d'enrichir votre
          vocabulaire et d'améliorer votre compréhension de la grammaire. Vous
          pouvez commencer par lire des articles de journaux en ligne ou des
          histoires courtes, et augmenter progressivement la difficulté des
          textes.
        </p>
        <div className="hyperlink-learn-french"> En savoir plus</div>
      </section>
      <section className="section-container">
        <h2 className="container-title">
          Regardez des films et des émissions de télévision en français
        </h2>
        <p className="container-text">
          Regarder des films et des émissions de télévision en français est un
          excellent moyen d'améliorer votre compréhension orale. Vous pouvez
          commencer par regarder des films avec des sous-titres en français, et
          augmenter progressivement la difficulté en retirant les sous-titres.
        </p>
        <div className="hyperlink-learn-french"> En savoir plus</div>
      </section>
      <section className="section-container">
        <h2 className="container-title">Pratiquez avec des locuteurs natifs</h2>
        <p className="container-text">
          La pratique avec des locuteurs natifs est un excellent moyen
          d'améliorer votre prononciation et votre fluidité. Vous pouvez trouver
          des partenaires de conversation en ligne ou dans des groupes de
          conversation en français dans votre région.
        </p>
        <div className="hyperlink-learn-french"> En savoir plus</div>
      </section>
      <section className="section-container-two">
        <h2 className="container-title">
          Contenu pédagogique : La grammaire française
        </h2>
        <section className="card-tips-deck">
          <section className="card-tips">
            <h3 className="container-title">Genres des mots</h3>
            <p className="container-text">
              Il est important de comprendre le genre des mots en français. Les
              noms sont soit masculins, soit féminins, et ils ont des articles
              et des adjectifs correspondants.
            </p>
          </section>
          <section className="card-tips">
            <h3 className="container-title">Conjugaison des verbes</h3>
            <p className="container-text">
              Les verbes en français ont des formes différentes selon le temps,
              le mode et la personne. Il est essentiel de maîtriser la
              conjugaison pour communiquer avec précision.
            </p>
          </section>
          <section className="card-tips">
            <h3 className="container-title">Les pronoms</h3>
            <p className="container-text">
              Les pronoms en français remplacent les noms et peuvent être sujets
              ou objets. Les pronoms ont également des formes différentes selon
              le genre et le nombre.
            </p>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Tips;
