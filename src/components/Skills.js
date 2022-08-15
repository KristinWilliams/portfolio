import React from "react";
import SkillsModule from "./css/Skills.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Skills = () => {
  return (
    <div className={SkillsModule.container}>
      <h1 className={SkillsModule.header}>About</h1>
      <main className={SkillsModule.content}>
        <p>
          Hi, my name is Kristin. I’m a Frontend Developer who is very
          passionate about tech and design.
        </p>
        <div className={SkillsModule.skills}>
          <div>
            <h1>Skills</h1>
          </div>
          <ul className={SkillsModule["skills-list"]}>
            <li>HTML</li>
            <li>SCSS</li>
            <li>RESTApi</li>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>CSS</li>
            <li>React</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Skills;
