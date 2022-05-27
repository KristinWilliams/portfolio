import React from "react";

const App = () => {
  return (
    <div className="container">
      <div className="hero-container">
        <nav>
          <img src="img/laptop-icon.svg" alt="logo icon" />
          <ul className="nav-list">
            <li>skills</li>
            <li>work</li>
            <li>contract</li>
          </ul>
        </nav>
        <div className="name-container">
          <h1>kristin williams</h1>
          <h2>Frontend Developer</h2>
        </div>
        <img src="img/down-arrow.svg" alt="down arrow" />
      </div>
      <div className="skills-container">
        <h1>skills</h1>
        <ul className="skills-list">
          <li>HTML</li>
          <li>SCSS</li>
          <li>RESTApi</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>React</li>
        </ul>
      </div>
      <div className="work-container">
        <h1>work</h1>
        <div className="project">
          <div className="project-container">
            <img src="img/github-icon.svg" />
            <img src="img/link-icon.svg" />
            <h1>All About it</h1>
            <h3 className="language-used">React</h3>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <h1>contact</h1>
        <img src="img/github-icon.svg" />
        <img src="img/link-icon.svg" />
        <form name="contact" method="POST">
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Email"></input>
          <input type="textarea" placeholder="Comment"></input>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
