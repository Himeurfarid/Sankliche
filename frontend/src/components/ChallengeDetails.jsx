import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ChallengeDetails() {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5050/challenges/${id}`)
      .then((response) => response.json())
      .then((data) => setChallenge(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!challenge) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{challenge.title}</h2>
      <p>{challenge.points}</p>
      <p>{challenge.time_challenge}</p>
      <p>{challenge.level_challenge}</p>
      <p>{challenge.description_challenge}</p>
    </div>
  );
}

export default ChallengeDetails;
