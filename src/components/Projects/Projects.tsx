import "./Projects.css";
import ProjectCard from "../Cards/ProjectCard";
const Projects = () => {
  return (
    <>
      <section id="projects" className="projects">
        <h1 className="title">Projects</h1>
        <div className="container">
          <ProjectCard
            img="/assets/weather.jpg"
            title="Simple weather app"
            url="https://weather-app-react-v1.web.app/"
          />
          <ProjectCard
            img="/assets/utube.jpg"
            title="Youtube layout clone"
            url="https://fir-69302.web.app/"
          />
          <ProjectCard
            img="/assets/xo.jpg"
            title="tic tac toe Gamet"
            url="https://xogame-v1.web.app/"
          />
          <ProjectCard
            img="/assets/to-do-list.jpg"
            title="Simple to-do list"
            url="https://to-do-listv1.web.app/"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
