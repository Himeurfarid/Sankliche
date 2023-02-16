import "./ChallengesCard.css";

function Challenge() {
  return (
    <div className="challenge">
      <div className="challengescard">
        <div className="titleandlevelchallenges">
          <h1 className="titlechallenge">Titre du défi</h1>
          <p className="levelchallenge">Difficulté du défi</p>
        </div>
        <div className="descriptionchallenges">
          <p className="descriptionchallenge">description du défi</p>
        </div>
        <div className="timeandpointchallenges">
          <p className="timechallenge">Temps du défi</p>
          <p className="scorechallenge">Point du défi</p>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
