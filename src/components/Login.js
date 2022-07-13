import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("");

  const navigate = useNavigate();

  const navigateCreate = () => {
    localStorage.setItem("Username", username);

    navigate("/");
  };

  const submit = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
  };

  const check = () => {
    if (password.length < 6) {
      setStatus("Password incorrect");
    } else {
      setStatus(`Succesfully logged in welcome "${username}"!`);
      navigateCreate();
    }
  };

  return (
    <div>
      <form onSubmit={submit} className="main-login">
        <h2 style={{ color: "white" }}>Log In</h2>
        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          required
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={check}>SUBMIT</button>
        <h3>{status}</h3>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
