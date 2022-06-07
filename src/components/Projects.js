import React from "react";

const Projects = ({ thumbnail, link, title }) => {
  return (
    <>
      <div className="project">
        <div className="img-container">
          <div className="overlay"></div>
          <img src={thumbnail} className="project-screenshot" />
        </div>
        <div className="project-title">
          <a href="https://github.com/KristinWilliams">
            <div className="github-icon">
              <img src="img/github-icon.svg" />
            </div>
          </a>
          <h1>{title}</h1>
          <a href={link}>
            <div className="link-icon">
              <img src="img/link-icon.svg" />
            </div>
          </a>
        </div>
      </div>
      <ul className="languages-used">
        <li>React</li>
        <li>React</li>
        <li>React</li>
        <li>React</li>
        <li>React</li>
      </ul>
    </>
  );
};

export default Projects;
