import React from "react";
import toDoList from "../assets/to-do-list.jpg";
import utube from "../assets/utube.jpg";
import xo from "../assets/xo.jpg";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <section id="projects" className="projects">
        <h1 className="title">Projects</h1>
        <div className="container">
          <a href="https://to-do-listv1.web.app/" className="pro-card">
            <div>
              <i className="fa-solid fa-list-check"></i>
              <img src={toDoList} alt="The img loading" />
            </div>
            <div className="info">
              <p>Simple to-do list</p>
              <p>Click me to open</p>
            </div>
          </a>
          <a href="https://fir-69302.web.app/" className="pro-card">
            <div>
              <img src={utube} alt="The img loading" />
              <i className="fa-brands fa-youtube"></i>
            </div>
            <div className="info">
              <p>Youtube layout clone </p>
              <p>Click me to open</p>
            </div>
          </a>
          <a href="https://xogame-v1.web.app/" className="pro-card">
            <div>
              <i className="fa-solid fa-gamepad"></i>
              <img src={xo} alt="The img loading" />
            </div>
            <div className="info">
              <p>tic tac toe Game</p>
              <p>Click me to open</p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;
