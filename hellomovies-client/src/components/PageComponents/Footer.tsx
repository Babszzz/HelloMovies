import React from "react";
import FooterLogo from "../../assets/images/logos/footer-logo.svg";
import Facebook from "../../assets/images/social icons/facebook.svg";
import LinkedIn from "../../assets/images/social icons/linkedIn.svg";
import Dribbble from "../../assets/images/social icons/dribbble.svg";
import Instagram from "../../assets/images/social icons/instagram.svg";
import "../../assets/styles/main.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <img src={FooterLogo} alt="Footer logo" className="footer__logo" />
        <p className="footer__copyright__text">
          &copy; Copyright 2023 HelloMovies. All Rights Reserved
        </p>
      </div>
      <div className="footer__social">
        <img src={Facebook} alt="Facebook Icon" />
        <img src={LinkedIn} alt="LinkedIn Icon" />
        <img src={Dribbble} alt="Dribbble Icon" />
        <img src={Instagram} alt="Instagram Icon" />
      </div>
    </footer>
  );
};

export default Footer;
