import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("");

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
    }
  };

  return (
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
  );
};

export default Login;
