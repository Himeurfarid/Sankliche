import React from "react";
import PropTypes from "prop-types";
import "./ChallengesCard.css";
import time from "../assets/time.png";

function Challenge({ title, levelChallenge, points }) {
  return (
    <div className="challengescard">
      <div className="titleandlevelchallenges">
        <h1 className="titlechallenge">{title}</h1>
        <p className="levelchallenge">{levelChallenge}</p>
      </div>
      <div className="timeandpointchallenges">
        <p className="scorechallenge"> + {points}pts</p>
        <div className="logoandtime">
          <img className="logotime" src={time} alt="time" />
          <p className="timechallenge">10 min</p>
        </div>
      </div>
    </div>
  );
}
Challenge.propTypes = {
  title: PropTypes.string.isRequired,
  levelChallenge: PropTypes.string.isRequired,
  points: PropTypes.string.isRequired,
};

export default Challenge;
