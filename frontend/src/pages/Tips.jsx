import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Tips.css";

function Tips() {
  return (
    <>
      <Header />
      <section>
        <h2>Astuce n°1 : Lisez en français</h2>
        <p>
          Lire des textes en français est un excellent moyen d'enrichir votre
          vocabulaire et d'améliorer votre compréhension de la grammaire. Vous
          pouvez commencer par lire des articles de journaux en ligne ou des
          histoires courtes, et augmenter progressivement la difficulté des
          textes.
        </p>
      </section>
      <section>
        <h2>
          Astuce n°2 : Regardez des films et des émissions de télévision en
          français
        </h2>
        <p>
          Regarder des films et des émissions de télévision en français est un
          excellent moyen d'améliorer votre compréhension orale. Vous pouvez
          commencer par regarder des films avec des sous-titres en français, et
          augmenter progressivement la difficulté en retirant les sous-titres.
        </p>
      </section>
      <section>
        <h2>Astuce n°3 : Pratiquez avec des locuteurs natifs</h2>
        <p>
          La pratique avec des locuteurs natifs est un excellent moyen
          d'améliorer votre prononciation et votre fluidité. Vous pouvez trouver
          des partenaires de conversation en ligne ou dans des groupes de
          conversation en français dans votre région.
        </p>
      </section>
      <section>
        <h2>Contenu pédagogique : La grammaire française</h2>
        <p>
          La grammaire française peut être difficile pour les apprenants
          étrangers, mais elle est essentielle pour parler et écrire
          correctement. Voici quelques points clés de la grammaire française à
          étudier :
        </p>
        <ul>
          <li>Les genres des mots : masculin ou féminin</li>
          <li>Les articles : définis, indéfinis et partitifs</li>
          <li>Les verbes : conjugaison, temps et modes</li>
          <li>Les pronoms : personnels, démonstratifs et relatifs</li>
          <li>Les adjectifs : qualificatifs, possessifs et numéraux</li>
        </ul>
      </section>
      <section className="content">
        <h2>Contenu pédagogique : La grammaire française</h2>
        <div className="card-tips-deck">
          <div className="card-tips">
            <h3>Genres des mots</h3>
            <p>
              Il est important de comprendre le genre des mots en français. Les
              noms sont soit masculins, soit féminins, et ils ont des articles
              et des adjectifs correspondants.
            </p>
          </div>
          <div className="card-tips">
            <h3>Conjugaison des verbes</h3>
            <p>
              Les verbes en français ont des formes différentes selon le temps,
              le mode et la personne. Il est essentiel de maîtriser la
              conjugaison pour communiquer avec précision.
            </p>
          </div>
          <div className="card-tips">
            <h3>Les pronoms</h3>
            <p>
              Les pronoms en français remplacent les noms et peuvent être sujets
              ou objets. Les pronoms ont également des formes différentes selon
              le genre et le nombre.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Tips;
