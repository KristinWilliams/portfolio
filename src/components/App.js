import React from "react";
import style from "./style.css";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

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
      <Contact />
    </div>
  );
};

export default App;
