import React from "react";
import "../../assets/styles/components.scss";
import { IButtonProps } from "../../interfaces";

const Button: React.FC<IButtonProps> = ({ title, icon, onClick }) => {
  return (
    <button onClick={onClick}>
      {icon ? icon : ""} {title}
    </button>
  );
};

export default Button;
