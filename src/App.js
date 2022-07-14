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
import Amazon from "./components/Amazon";

function App() {
  return (
    <div className="App">
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
        <Route path="/amazon" element={<Amazon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
