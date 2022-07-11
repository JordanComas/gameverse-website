import React from "react";
import wow from "../images/wow.gif";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404 Not Found</h1>
      <img height="400" src={wow} alt="wow picture" />
    </div>
  );
};

export default NotFound;
