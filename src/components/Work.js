import React from "react";
import NavBar from "./NavBar";
import Projects from "./Projects";
import ProjectsModule from "./css/Projects.module.css";
import Footer from "./Footer";

const Work = () => {
  return (
    <div className={ProjectsModule.container}>
      <NavBar
        background="#D8DFFE"
        display="none"
        justifyContent="center"
        marginRight="2rem"
        marginLeft="2rem"
        width="100%"
        minWidth="10%"
      />
      <main className={ProjectsModule.content}>
        <h1 className={ProjectsModule["work-header"]}>Work</h1>
        <Projects
          title="Recipe App"
          extraInfo="(email: janed@yahoo.com pass: Qdkfjdkjf25!)"
          img="img/recipe-app-screengrab.png"
          github="https://github.com/KristinWilliams/Recipe-App"
          siteLink="https://searchnutrition.netlify.app/"
          languages={["React", "Typescript", "Scss", "Firebase"]}
        />
        <Projects
          title="All About it"
          img="img/all-about-it-screenshot.png"
          github="https://github.com/KristinWilliams/all-about-it-v2"
          siteLink="https://www.allaboutitpublishing.com/"
          languages={["React", "Api", "CSS", "Strapi", "Javascript"]}
        />
        <Projects
          title="Ecommerce App"
          img="img/sneakers-ecommerce-screenshot.png"
          github="https://github.com/KristinWilliams/Sneakers-Ecommerce"
          siteLink="https://sneakers-ecommerce-app.netlify.app/"
          languages={["React", "CSS", "Javascript"]}
        />
        <Projects
          title="Calculator App"
          img="img/calculator-screenshot.png"
          github="https://github.com/KristinWilliams/CalculatorApp"
          siteLink="https://my-calcu-app.netlify.app/"
          languages={["Javascript", "CSS", "HTML"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Work;
