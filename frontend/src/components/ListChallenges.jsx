import React from "react";
import PropTypes from "prop-types";
import "./ChallengesCard.css";
import ChallengesCard from "./ChallengesCard";

function Challenge({ challenges }) {
  return (
    <div>
      {challenges.map((challenge) => {
        return (
          <ChallengesCard
            title={challenge.title}
            levelChallenge={challenge.level_challenge}
            points={challenge.points}
            key={challenge.title}
          />
        );
      })}
    </div>
  );
}
Challenge.propTypes = {
  challenges: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      levelChallenge: PropTypes.string.isRequired,
      points: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Challenge;
