import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

const SingleGame = () => {
  const [gameDetails, setGamedetails] = React.useState({});
  const params = useParams();

  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
    params: { id: `${params.id}` },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_GAME_API,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const getGames = async () => {
    let response = await axios.request(options);
    console.log(response.data);
    setGamedetails(response.data);
  };

  React.useEffect(function () {
    getGames();
  }, []);

  return (
    <div>
      <div className="main-singlegame">
        <div className="main-singlegame-left">
          <img src={gameDetails.thumbnail} alt="game picture" />
          <h2>{gameDetails.title}</h2>
          <section>
            <h4>Developer: </h4>
            {gameDetails.developer}
          </section>
          <section>
            <h4>Genre: </h4>
            {gameDetails.genre}
          </section>
          <section>
            <h4>Platform: </h4>
            {gameDetails.platform}
          </section>
          <section>
            <h4>Release Date: </h4>
            {gameDetails.release_date}
          </section>

          <h4 className="main-single-game-system-title">
            System Requirements:{" "}
          </h4>
          <div className="main-singlegame-system">
            {gameDetails.minimum_system_requirements && (
              <ul className="main-singlegame-system-list">
                <li>{gameDetails.minimum_system_requirements.graphics}</li>
                <li>{gameDetails.minimum_system_requirements.memory}</li>
                <li>{gameDetails.minimum_system_requirements.os}</li>
                <li>{gameDetails.minimum_system_requirements.processor}</li>
                <li>{gameDetails.minimum_system_requirements.storage}</li>
              </ul>
            )}
          </div>
          <h4>Game link: </h4>
          <a href={gameDetails.game_url} target="_blank" rel="noreferrer">
            {gameDetails.game_url}
          </a>
        </div>
        <div className="main-singlegame-right">
          <h4>Description: </h4>
          <p className="main-single-game-desc">{gameDetails.description}</p>
          <h4>Screenshots: </h4>
          <div className="main-singlegame-img-section">
            {gameDetails.screenshots &&
              gameDetails.screenshots.map(function (shot) {
                return (
                  <div key={shot.image}>
                    <img src={shot.image} alt="Screenshots" />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleGame;
