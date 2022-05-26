import React from "react";

const App = () => {
  return (
    <div class="container">
      <div class="hero-container">
        <nav>
          <img src="img/laptop-icon.svg" alt="logo icon" />
          <ul class="nav-list">
            <li>skills</li>
            <li>work</li>
            <li>contract</li>
          </ul>
        </nav>
        <div class="name-container">
          <h1>kristin williams</h1>
          <h2>Frontend Developer</h2>
        </div>
        <img src="img/down-arrow.svg" alt="down arrow" />
      </div>
      <div class="skills-container">
        <h1>skills</h1>
        <ul class="skills-list">
          <li>HTML</li>
          <li>SCSS</li>
          <li>RESTApi</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>React</li>
        </ul>
      </div>
      <div class="work-container">
        <h1>work</h1>
        <div class="project-container"></div>
      </div>
    </div>
  );
};

export default App;
