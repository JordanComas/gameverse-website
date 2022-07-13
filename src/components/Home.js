import React from "react";
import controller from "../images/controller.gif";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="main-home">
        <div className="main-home-title">
          <h1>
            SEARCH FOR ONLY <br />
            THE BEST GAMES
          </h1>
          <p>
            Search, play, invest &amp; join the fight on <br />
            any game you desire most with <b>Gameverse</b>
          </p>
          <div className="main-home-btn-display">
            <Link to="/games">
              <button className="main-home-btn">Start Here</button>
            </Link>
          </div>
        </div>
        <img className="logo" src={controller} alt="Controller" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
