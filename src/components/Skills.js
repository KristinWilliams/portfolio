import React from "react";
import SkillsModule from "./css/Skills.module.css";
import NavBar from "./NavBar";

const Skills = () => {
  return (
    <>
      <NavBar background="#FDF1FD" />
      <div className={SkillsModule.container}>
        <h1>skills</h1>
        <ul className={SkillsModule["skills-list"]}>
          <li>HTML</li>
          <li>SCSS</li>
          <li>RESTApi</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>React</li>
          <li>Typescript</li>
        </ul>
      </div>
    </>
  );
};

export default Skills;
