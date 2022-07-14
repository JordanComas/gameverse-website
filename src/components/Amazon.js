import React from "react";
import { Link } from "react-router-dom";
import amazonJSON from "../amazon.json";
import warrior from "../images/amazon.png";
import shot1 from "../images/shot1.png";
import shot2 from "../images/shot2.png";
import shot3 from "../images/shot3.png";
import shot4 from "../images/shot4.png";

const Amazon = () => {
  console.log(amazonJSON);
  return (
    <div className="main-singlegame">
      <div className="main-singlegame-left">
        <img height="200" src={warrior} />
        <h2>{amazonJSON.title} </h2>
        <section>
          <h4>Developer: </h4>
          {amazonJSON.developer}
        </section>
        <section>
          <h4>Genre: </h4>
          {amazonJSON.genre}
        </section>
        <section>
          <h4>Platform: </h4>
          {amazonJSON.platform}
        </section>
        <section>
          <h4>Release Date: </h4>
          {amazonJSON.release_date}
        </section>
        <h4 className="main-single-game-system-title">System Requirements:</h4>
        <div className="main-singlegame-system">
          <ul className="main-singlegame-system-list">
            <li>{amazonJSON.minimum_system_requirements}</li>
          </ul>
        </div>
        <h4>Game link: </h4>
        <a
          href="https://jordancomas.github.io/Fighting-game-project/"
          target="_blank"
          rel="noreferrer"
        >
          https://jordancomas.github.io/Fighting-game-project/
        </a>
      </div>
      <div className="main-singlegame-right">
        <h4>Description: </h4>
        <p className="main-single-game-desc">{amazonJSON.description}</p>
        <h4>Screenshots: </h4>
        <div className="main-singlegame-img-section">
          <img src={shot1} alt="Screenshots" />
          <img src={shot3} alt="Screenshots" />
          <img src={shot4} alt="Screenshots" />
          <img src={shot2} alt="Screenshots" />
        </div>
      </div>
    </div>
  );
};

export default Amazon;
