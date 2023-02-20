import PropTypes from "prop-types";
import "./ChallengesCard.css";
import time from "../assets/time.png";

function Challenge({ title, points, timechallenge, levelchallenge }) {
  return (
    <button type="button" className="challengescard">
      <div className="titleandlevelchallenges">
        <h1 className="titlechallenge">{title}</h1>
        <p className="levelchallenge">{levelchallenge}</p>
      </div>
      <div className="timeandpointchallenges">
        <p className="scorechallenge"> + {points}pts</p>
        <div className="logoandtime">
          <img className="logotime" src={time} alt="time" />
          <p className="timechallenge">{timechallenge}</p>
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
};

export default Challenge;
