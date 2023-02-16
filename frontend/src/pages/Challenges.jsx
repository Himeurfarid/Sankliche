import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import ListChallenges from "../components/ListChallenges";
import Header from "../components/Header";

function Challenges() {
  const [getChallenge, setGetChallenge] = useState([]);
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5050"
      }/challenges`
    )
      .then((response) => response.json())
      .then((data) => setGetChallenge(data));
  }, []);

  return (
    <>
      <Header />
      <ListChallenges challenges={getChallenge} />;
      <Footer />
    </>
  );
}

export default Challenges;
