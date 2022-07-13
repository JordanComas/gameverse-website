import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const FavGames = () => {
  let storedGames = JSON.parse(localStorage.getItem("Favorites"));

  const navigate = useNavigate();
  //un stringify
  console.log(storedGames);

  const clear = () => {
    localStorage.clear();
    navigate("/favorites");
  };

  return (
    <div>
      <div className="main-favorites">
        <div className="main-favorites-btn">
          <button onClick={clear}>Clear All</button>
        </div>
        {storedGames &&
          storedGames.map(function (game) {
            return (
              <div className="main-favorites-layout">
                <Link to={`/games/${game.id}`}>
                  <img src={game.thumbnail} alt="Image picture" />
                  <h3>{game.title}</h3>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FavGames;
