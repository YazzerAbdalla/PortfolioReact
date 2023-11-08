import React from "react";
import "./About.css";
import sideImg from "/assets/Yasser2.jpg";
const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="title">About me</h2>
      <div className="container">
        <div className="right">
          <p>
            Yasser Abdalla is a junior software engineer with experience of 1
            year, he is interested in web technology specifically React and
            Nodejs, he loves learning new things, and he also loves helping
            others to succeed.
          </p>
        </div>
        <div className="left">
          <img src={sideImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
