import React from "react";
import ButtonStyles from "../ButtonComponent/Button.module.css";
import { useState } from "react";

const Button = ({ children, style, next, onsubmit, hoverStyle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <button
        className={`${ButtonStyles.myButton} `}
        style={isHovered ? { ...style, ...hoverStyle } : style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={next}
        onSubmit={onsubmit}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
