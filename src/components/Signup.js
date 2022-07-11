import React from "react";

const Signup = () => {
  const [status, setStatus] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submit = (e) => {
    e.preventDefault();
    setStatus(`Welcome "${username}" to Gameverse!!`);
    setFirstName("");
    setLastName("");
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="main-signup">
      <form onSubmit={submit}>
        <h3>Create an Account</h3>
        <div className="main-signup-name">
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            placeholder="Last Name"
            required
          />
        </div>
        <div className="main-signup-email">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            required
          />
        </div>
        <div className="main-signup-login">
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
            required
          />
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            required
          />
        </div>
        <button>Submit</button>
        <h3>{status}</h3>
      </form>
    </div>
  );
};

export default Signup;
