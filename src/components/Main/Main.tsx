import React from "react";
import "./main.css";
import sideImg from "../assets/Elsahel.png";
const Main = () => {
  return (
    <section className="main">
      <div className="flex">
        <div className="bio">
          <h2>
            Hi, I'm Yasser <span>I am a Junior Software Engineer</span>
          </h2>
          <div className="d-flex">
            <div className="main-btn">
              <a href="#contacts">Lets Work</a>
            </div>
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
      </div>
    </section>
  );
};

export default Main;
