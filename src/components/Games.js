import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TopButton from "./TopButton";
import FavButton from "./FavButton";
import Footer from "./Footer";

const Games = () => {
  const [games, setGames] = React.useState([]);
  const [search, setsearch] = React.useState("");

  const options = {
    method: "GET",
    url: `https://free-to-play-games-database.p.rapidapi.com/api/games`,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_GAME_API,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const getGames = async () => {
    let response = await axios.request(options);
    // console.log(response.data);
    setGames(response.data);
  };

  let isFav = JSON.parse(localStorage.getItem("Favorites"));

  React.useEffect(function () {
    getGames();
  }, []);

  const searchGame = (event) => {
    setsearch(event.target.value);
  };

  return (
    <div>
      <div className="main-games">
        <input
          className="search"
          type="text"
          value={search}
          onChange={searchGame}
          placeholder="Search game or genre here..."
        />
        {games
          .filter((item) => {
            const searchTerm = search.toLowerCase();
            const title = item.title.toLowerCase();
            const genre = item.genre.toLowerCase();

            return (
              !searchTerm ||
              title.startsWith(searchTerm) ||
              genre.startsWith(searchTerm)
            );
          })
          .map(function (game) {
            return (
              <div>
                <Link
                  className="main-games-layout"
                  key={game.id}
                  to={`/games/${game.id}`}
                >
                  <img src={game.thumbnail} alt="game picture" />
                  <br />
                  <h3>{game.title.toUpperCase()}</h3>
                  <br />
                  <p className="main-games-desc">{game.short_description}</p>
                </Link>
                <FavButton
                  isFav={
                    isFav &&
                    isFav.some(function (heart) {
                      return heart.title === game.title;
                    })
                  }
                  game={game}
                />
              </div>
            );
          })}
        <TopButton />
      </div>
      <Footer />
    </div>
  );
};

export default Games;
