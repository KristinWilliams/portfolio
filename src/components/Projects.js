import React from "react";

const Projects = () => {
  return (
    <>
      <div className="project">
        <div className="img-container">
          <div className="overlay"></div>
          <img
            src="img/all-about-it-screenshot.png"
            className="project-screenshot"
          />
        </div>
        <div className="project-title">
          <div className="github-icon">
            <img src="img/github-icon.svg" />
          </div>
          <h1>All About it</h1>
          <div className="link-icon">
            <img src="img/link-icon.svg" />
          </div>
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
