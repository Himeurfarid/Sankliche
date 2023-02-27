import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/ChallengesCard.css";
import time from "../assets/time.png";

function ListChallenges({ challenges }) {
  return (
    <div className="list-card-challenge">
      {challenges.map((challenge) => {
        return (
          <Link to={`/challenge/${challenge.id}`} key={challenge.id}>
            <button type="button" className="challenges-card">
              <div className="title-and-level-challenges">
                <h1 className="title-challenge">{challenge.title}</h1>
                <p className="level-challenge">{challenge.level_challenge}</p>
              </div>
              <div className="time-and-point-challenges">
                <p className="score-challenge"> + {challenge.points}pts</p>
                <div className="logo-and-time">
                  <img className="logo-time" src={time} alt="time" />
                  <p className="time-challenge">{challenge.time_challenge}</p>
                </div>
                <div className="collaboration">
                  <p>{challenge.collaboration}</p>
                </div>
              </div>
            </button>
          </Link>
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
      collaboration: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ListChallenges;
