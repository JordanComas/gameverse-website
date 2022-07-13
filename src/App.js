import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Games from "./components/Games";
import SingleGame from "./components/SingleGame";
// import logo from "./images/logo.png";
import Navbar from "./components/Navbar";
import FavGames from "./components/FavGames";

function App() {
  // const [colorChange, setColorchange] = React.useState(false);

  // const navigate = useNavigate();

  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 80) {
  //     setColorchange(true);
  //   } else {
  //     setColorchange(false);
  //   }
  // };
  // window.addEventListener("scroll", changeNavbarColor);

  // const logout = () => {
  //   localStorage.clear();
  //   navigate("/");
  // };

  // let username = localStorage.getItem("Username");

  return (
    <div className="App">
      {/* <header>
        <nav className={colorChange ? "navbar-colorChange" : ""}>
          <div className="nav-title">
            <Link to="/">
              <img className="nav-title-img" src={logo} alt="Gameverse" />
            </Link>

            <h4>Gameverse</h4>
          </div>
          {username && (
            <p className="main-nav-username"> Welcome {username}!</p>
          )}
          <div className="game-links">
            <Link to="/games">Games</Link>
          </div>

          <div className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {!username && <Link to="/login">Log In</Link>}
            <Link to="/signup">Sign Up</Link>
            {username && <button onClick={logout}>Log Out</button>}
          </div>
        </nav>
      </header> */}
      <Navbar />
      <div className="cross"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/games/:id" element={<SingleGame />} />
        <Route path="/games" element={<Games />} />
        <Route path="/favorites" element={<FavGames />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
