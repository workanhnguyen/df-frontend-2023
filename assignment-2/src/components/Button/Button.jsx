import React from "react";

import "./Button.css";

const Button = ({ type='button', color, text, onClick, disabled }) => {
  return (
    <button type={type} className={`${disabled ? 'btn-disabled btn-gray' : `btn btn-${color}`}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
