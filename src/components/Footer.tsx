import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="start">
          <h2>
            Copyrights @ <span>Yasser Abdalla</span>
          </h2>
        </div>
        <div className="end">
          <div className="links">
            <a href="https://www.linkedin.com/in/yasser-abdalla-a12113161/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/Yasser.Abdalla.512/">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="https://github.com/YazzerAbdalla">
              <i className="fa-brands fa-square-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
