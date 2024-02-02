import SkillsCard from "../Cards/SkillsCard";
import "./skills.css";
const Skills = () => {
  const skills = [
    { icon: "fa-brands fa-square-js", title: "JS" },
    { icon: "fa-brands fa-html5", title: "HTML5" },
    { icon: "fa-brands fa-css3-alt", title: "CSS3" },
    { icon: "fa-brands fa-react", title: "REACT" },
    { icon: "fa-brands fa-python", title: "PYTHON" },
    { icon: "fa-brands fa-python", title: "PYTHON" },
    { icon: "fa-brands fa-linux", title: "LINUX" },
    { icon: "fa-solid fa-database", title: "SQL SERVER" },
  ];
  return (
    <section id="skills">
      <h1 className="title">Skills</h1>
      <div className="container">
        {skills.map(({ icon, title }, index) => (
          <>
            <SkillsCard key={index} icon={icon} title={title} />
          </>
        ))}
      </div>
    </section>
  );
};

export default Skills;
