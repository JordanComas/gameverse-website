import React from "react";
import linkedin from "../images/linked.png";

const Footer = () => {
  return (
    <footer>
      Created by JordanComas © 2022
      <a
        href="https://www.linkedin.com/in/jordan-comas-338882235/"
        target="_blank"
        rel="noreferrer"
        aria-label="Linked In"
      >
        <img height="30" src={linkedin} alt="Linked In" />
      </a>
    </footer>
  );
};

export default Footer;
