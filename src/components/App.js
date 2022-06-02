import React from "react";
import style from "./style.css";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <Skills />
      <div className="work-container">
        <h1 className="work-header">work</h1>
        <Projects />
        <Projects />
        <Projects />
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
