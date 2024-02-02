import "../../App.css";
import "./Projects.css";
import ProjectCard from "../Cards/ProjectCard";
const Projects = () => {
  const projects = [
    {
      icon: "fa-solid fa-cloud",
      img: "/assets/weather.jpg",
      title: "Simple weather app",
      url: "https://weather-app-react-v1.web.app/",
    },
    {
      icon: "fa-brands fa-youtube",
      img: "/assets/utube.jpg",
      title: "Youtube layout clone",
      url: "https://fir-69302.web.app/",
    },
    {
      icon: "fa-solid fa-gamepad",
      img: "/assets/xo.jpg",
      title: "tic tac toe Gamet",
      url: "https://xogame-v1.web.app/",
    },
    {
      icon: "fa-solid fa-list-check",
      img: "/assets/to-do-list.jpg",
      title: "Simple to-do list",
      url: "https://to-do-listv1.web.app/",
    },
  ];
  return (
    <>
      <section id="projects" className="projects">
        <h1 className="title ">Projects</h1>
        <div className="container grid grid-cols-2">
          {projects.map(({ icon, img, title, url }, index) => (
            <ProjectCard
              icon={icon}
              img={img}
              title={title}
              url={url}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
