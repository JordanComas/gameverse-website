import React from "react";
import Footer from "./Footer";
import Input from "./Input";

const ContactForm = () => {
  const [status, setStatus] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(`We Will be in touch soon!`);
  };

  return (
    <div>
      <form className="main-contact" onSubmit={handleSubmit}>
        <h2 style={{ color: "white" }}>Contact Us</h2>
        <Input name="Full Name" type="text" />
        <Input name="Email Address" type="email" />
        <div>
          <textarea placeholder="Your message" name="message" required />
        </div>
        <div>
          <button type="submit"> Send message </button>
        </div>
        <h3>{status}</h3>
      </form>
      <Footer />
    </div>
  );
};

export default ContactForm;
