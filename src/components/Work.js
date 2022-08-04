import React from "react";
import NavBar from "./NavBar";
import Projects from "./Projects";
import ProjectsModule from "./css/Projects.module.css";

const Work = () => {
  return (
    <div className="work-container">
      <NavBar background="#D8DFFE" />
      <div className={ProjectsModule.container}>
        <h1 className={ProjectsModule["work-header"]}>Work</h1>
        <Projects
          title="All About it"
          img="img/all-about-it-screenshot.png"
          github="https://github.com/KristinWilliams/all-about-it-v2"
          siteLink="https://www.allaboutitpublishing.com/"
        />
        <Projects
          title="Ecommerce App"
          img="img/sneakers-ecommerce-screenshot.png"
          github="https://github.com/KristinWilliams/Sneakers-Ecommerce"
          siteLink="https://sneakers-ecommerce-app.netlify.app/"
        />
        <Projects
          title="Calculator App"
          img="img/calculator-screenshot.png"
          github="https://github.com/KristinWilliams/CalculatorApp"
          siteLink="https://my-calcu-app.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Work;
