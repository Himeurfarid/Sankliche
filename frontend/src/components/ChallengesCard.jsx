import "./ChallengesCard.css";
import time from "../assets/time.png";

function Challenge() {
  return (
    <div className="challengescard">
      <div className="titleandlevelchallenges">
        <h1 className="titlechallenge">Miam-Miam !</h1>
        <p className="levelchallenge">A1 - Facile</p>
      </div>
      <div className="timeandpointchallenges">
        <p className="scorechallenge"> +5 pts</p>
        <div className="logoandtime">
          <img className="logotime" src={time} alt="time" />
          <p className="timechallenge">10 min</p>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
