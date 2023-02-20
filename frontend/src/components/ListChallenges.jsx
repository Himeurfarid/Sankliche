import PropTypes from "prop-types";
import "./ChallengesCard.css";
import ChallengesCard from "./ChallengesCard";

function ListChallenges({ challenges }) {
  return (
    <div className="listcardchallenge">
      {challenges.map((challenge) => {
        return (
          <ChallengesCard
            title={challenge.title}
            points={challenge.points}
            timechallenge={challenge.time_challenge}
            levelchallenge={challenge.level_challenge}
            key={challenge.id}
          />
        );
      })}
    </div>
  );
}
ListChallenges.propTypes = {
  challenges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      points: PropTypes.string.isRequired,
      time_challenge: PropTypes.string.isRequired,
      level_challenge: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ListChallenges;
