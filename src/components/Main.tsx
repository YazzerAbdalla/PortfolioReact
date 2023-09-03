import React from "react";
import "./main.css";
import bgImg from "../assets/bg-overlay-home1.png";
import sideImg from "../assets/Elsahel.png";
const Main = () => {
  return (
    <section className="main">
      <div className="flex">
        <div className="bio">
          <h2>
            Hi, I'm Yasser <span>I am a FrontEndDev and IT</span>
          </h2>
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
            {/* <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a> */}
            <a href="https://github.com/YazzerAbdalla">
              <i className="fa-brands fa-square-github"></i>
            </a>
          </div>
          <div className="bg-img">
            <img src={bgImg} alt="" />
          </div>
        </div>
        {/* <div className="side-img">
          <img src={sideImg} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Main;
