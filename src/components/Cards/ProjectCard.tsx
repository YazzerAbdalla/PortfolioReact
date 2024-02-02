import React from "react";
import "../Projects/Projects";
interface ProjectCardProps {
  img: string;
  url: string;
  title: string;
}
const ProjectCard = ({ img, url, title }: ProjectCardProps) => {
  return (
    <a target="_blank" href={url} className="pro-card">
      <div>
        <i className="fa-solid fa-list-check"></i>
        <img src={img} alt="The img loading" />
      </div>
      <div className="info">
        <p>{title}</p>
        <p>Click me to open</p>
      </div>
    </a>
  );
};

export default ProjectCard;
