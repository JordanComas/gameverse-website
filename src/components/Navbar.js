import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import FadeMenu from "./Dropdown";
import useWindowSize from "./WindowSize";

const Navbar = () => {
  const [colorChange, setColorchange] = React.useState(false);

  const navigate = useNavigate();

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  let username = localStorage.getItem("Username");

  const size = useWindowSize();

  return (
    <header>
      <nav className={colorChange ? "navbar-colorChange" : ""}>
        <div className="nav-title">
          <Link to="/">
            <img className="nav-title-img" src={logo} alt="Gameverse" />
          </Link>

          <h4>Gameverse</h4>
        </div>

        <div className="game-links">
          {username && (
            <p className="main-nav-username">
              Welcome <br />
              {username}!
            </p>
          )}
          <Link to="/games">Games</Link>
          <Link to="/favorites">Favorites</Link>
        </div>

        <div className="nav-links">
          {!size.width <= 425 && size.width >= 426 && (
            <Link to="/about">About</Link>
          )}

          {!size.width <= 425 && size.width >= 426 && (
            <Link to="/contact">Contact</Link>
          )}

          {!username && !size.width <= 425 && size.width >= 426 && (
            <Link to="/login">Log In</Link>
          )}
          {!username && size.width >= 426 && <Link to="/signup">Sign Up</Link>}
          {username && !size.width <= 425 && size.width >= 426 && (
            <button onClick={logout}>Log Out</button>
          )}
        </div>
        {size.width <= 425 && <FadeMenu />}
      </nav>
    </header>
  );
};

export default Navbar;
