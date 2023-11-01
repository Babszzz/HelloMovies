import React from "react";
import "../../assets/styles/main.scss";
import HeaderLogo from "../../assets/images/logos/header-logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={HeaderLogo} alt="Header logo" />
    </header>
  );
};

export default Header;
