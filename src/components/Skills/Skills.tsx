import React from "react";
import "./skills.css";
const Slider = () => {
  return (
    <section id="skills">
      <h1 className="title">Skills</h1>
      <div className="container">
        <div className="skills-card">
          <i className="fa-brands fa-square-js"></i>
          <h3>JS</h3>
        </div>
        <div className="skills-card">
          <i className="fa-brands fa-html5"></i>
          <h3>HTML5</h3>
        </div>
        <div className="skills-card">
          <i className="fa-brands fa-css3-alt"></i>
          <h3>CSS3</h3>
        </div>
        <div className="skills-card">
          <i className="fa-brands fa-react"></i>
          <h3>REACT</h3>
        </div>
        <div className="skills-card">
          <i className="fa-brands fa-bootstrap"></i>
          <h3>BOOTSTRAP</h3>
        </div>
        <div className="skills-card">
          <i className="fa-brands fa-python"></i>
          <h3>PYTHON</h3>
        </div>
        <div className="skills-card">
          <i className="fa-brands fa-linux"></i>
          <h3>LINUX</h3>
        </div>
        <div className="skills-card">
          <i className="fa-solid fa-database"></i>
          <h3>DATABASE</h3>
        </div>
      </div>
    </section>
  );
};

export default Slider;
