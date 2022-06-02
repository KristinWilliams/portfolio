import React from "react";

const Projects = () => {
  return (
    <div className="work-container">
      <h1 className="work-header">work</h1>
      <div className="project">
        <img
          src="img/all-about-it-screenshot.png"
          className="project-screenshot"
        />
        <div className="project-title">
          <img src="img/github-icon.svg" />
          <h1>All About it</h1>
          <img src="img/link-icon.svg" />
        </div>
      </div>
      <h3 className="language-used">React</h3>
    </div>
  );
};

export default Projects;
