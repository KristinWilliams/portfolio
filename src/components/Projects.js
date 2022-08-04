import React from "react";
import ProjectsModule from "./css/Projects.module.css";
import NavBar from "./NavBar";

const Projects = ({ title, img, github, siteLink }) => {
  return (
    <div className={ProjectsModule.project}>
      <div className={ProjectsModule["img-container"]}>
        <div className={ProjectsModule.overlay}></div>
        <img src={img} className={ProjectsModule.screenshot} />
      </div>
      <div className={ProjectsModule["project-title"]}>
        <a href={github}>
          <div className={ProjectsModule["github-icon"]}>
            <img src="img/github-icon.svg" />
          </div>
        </a>
        <h1>{title}</h1>
        <a href={siteLink}>
          <div className={ProjectsModule["link-icon"]}>
            <img src="img/link-icon.svg" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
