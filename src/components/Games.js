import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TopButton from "./TopButton";
import FavButton from "./FavButton";
import Footer from "./Footer";
import warrior from "../images/amazon.png";
import amazonJSON from "../amazon.json";
import useWindowSize from "./WindowSize";
import glass from "../images/glass.png";

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

  const size = useWindowSize();

  // let flag;

  return (
    <div>
      <div className="main-games">
        {/* {!size.width <= 425 && size.width >= 426 && ( */}
        <input
          className="search"
          type="text"
          value={search}
          onChange={searchGame}
          placeholder="Search game or genre here..."
        />
        {/* )} */}
        {/* <img src={glass} alt="search" /> */}

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
              <div key={game.id} className="main-games-layout">
                <Link to={`/games/${game.id}`}>
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
        <div className="main-games-amazon">
          <Link to="/amazon">
            <img height="200" src={warrior} />
            <h3>{amazonJSON.title} </h3>
            {amazonJSON.short_description}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Games;
