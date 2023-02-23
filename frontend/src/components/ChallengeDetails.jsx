import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ChallengeDetails() {
  const { id } = useParams();
  const [challengeById, setChallengeById] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5050/challenges/${id}`)
      .then((response) => response.json())
      .then((data) => setChallengeById(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!challengeById) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{challengeById.title}</h2>
      <p>{challengeById.points}</p>
      <p>{challengeById.time_challenge}</p>
      <p>{challengeById.level_challenge}</p>
      <p>{challengeById.collaboration}</p>
      <p>{challengeById.description_challenge}</p>
      <p>{challengeById.tips}</p>
      <p>{challengeById.category}</p>
    </div>
  );
}

export default ChallengeDetails;
