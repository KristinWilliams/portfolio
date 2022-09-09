import React from "react";
import ProjectsModule from "./css/Projects.module.css";
import NavBar from "./NavBar";

const Projects = ({ title, img, github, siteLink, languages, extraInfo }) => {
  return (
    <>
      <div className={ProjectsModule.project}>
        <div className={ProjectsModule["img-container"]}>
          <div className={ProjectsModule.overlay}></div>
          <img src={img} className={ProjectsModule.screenshot} />
          <a href={github} className={ProjectsModule["github-link"]}>
            Code
          </a>
          <a href={siteLink} className={ProjectsModule["project-link"]}>
            Live
          </a>
        </div>
        <h1 className={ProjectsModule["project-title"]}>{title}</h1>
        <span>{extraInfo}</span>
      </div>
      <ul className={ProjectsModule["skills-list"]}>
        {languages.map((language, i) => {
          return (
            <li className={ProjectsModule.language} key={i}>
              {language}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Projects;
