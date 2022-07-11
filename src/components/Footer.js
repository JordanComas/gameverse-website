import React from "react";
import linkedin from "../images/linked.png";

const Footer = () => {
  return (
    <footer>
      @Gameverse 2022
      <a
        href="https://www.linkedin.com/in/jordan-comas-338882235/"
        target="_blank"
        rel="noreferrer"
      >
        <img height="30" src={linkedin} />
      </a>
    </footer>
  );
};

export default Footer;
