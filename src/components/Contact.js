import React from "react";

const ContactForm = () => {
  const [status, setStatus] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(`We Will be in touch soon!`);
  };

  return (
    <form className="main-contact" onSubmit={handleSubmit}>
      <h2 style={{ color: "white" }}>Contact Us</h2>
      <div>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div>
        <button type="submit"> Send a message </button>
      </div>
      <h3>{status}</h3>
    </form>
  );
};

export default ContactForm;
