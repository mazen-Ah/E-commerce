import React from "react";
import { useNavigate } from "react-router";
const Button = ({ to, className, text }) => {
  const navigator = useNavigate();
  return (
    <button
      onClick={() => navigator(to)}
      className={`px-3 py-2 rounded-lg ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
