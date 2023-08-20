import React from "react";
import "./main.css";
import bgImg from "../assets/bg-overlay-home1.png";
import sideImg from "../assets/Elsahel.png";
const Main = () => {
  return (
    <section className="main">
      <div className="bg-img">
        <img src={bgImg} alt="" />
      </div>
      <div className="flex">
        <div className="bio">
          <h2>
            Hi, I'm Yasser <span>I am a FrontEndDev and IT</span>
          </h2>
          <div className="main-btn">
            <a href="#projects">My Work</a>
          </div>
          <div className="links">
            <a href="">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-square-github"></i>
            </a>
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
