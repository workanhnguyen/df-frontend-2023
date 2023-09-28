import React from "react";

const Button = ({ type, color, text, onClick, disabled }) => {
  return (
    <button type={type} className={`p-3 rounded-md text-white ${disabled ? 'bg-gray-300' : `bg-${color}`}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
