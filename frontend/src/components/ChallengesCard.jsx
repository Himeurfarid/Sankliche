import PropTypes from "prop-types";
import "./ChallengesCard.css";
import time from "../assets/time.png";

function Challenge({
  title,
  points,
  timechallenge,
  levelchallenge,
  collaboration,
}) {
  return (
    <button type="button" className="challenges-card">
      <div className="title-and-level-challenges">
        <h1 className="title-challenge">{title}</h1>
        <p className="level-challenge">{levelchallenge}</p>
      </div>
      <div className="time-and-point-challenges">
        <p className="score-challenge"> + {points}pts</p>
        <div className="logo-and-time">
          <img className="logo-time" src={time} alt="time" />
          <p className="time-challenge">{timechallenge}</p>
        </div>
        <div className="collaboration">
          <p>{collaboration}</p>
        </div>
      </div>
    </button>
  );
}
Challenge.propTypes = {
  title: PropTypes.string.isRequired,
  points: PropTypes.string.isRequired,
  timechallenge: PropTypes.string.isRequired,
  levelchallenge: PropTypes.string.isRequired,
  collaboration: PropTypes.string.isRequired,
};

export default Challenge;
