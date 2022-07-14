import React from "react";

const Input = (props) => {
  return (
    <div className="input-group">
      <input type={props.type} id="name" required className="input" />
      <label for="name" className="input-label">
        {props.name}
      </label>
    </div>
  );
};

export default Input;
