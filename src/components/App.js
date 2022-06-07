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
        <Projects
          thumbnail="img/all-about-it-screenshot.png"
          link="https://www.allaboutitpublishing.com/"
          title="All About it"
        />
        <Projects
          thumbnail="img/sneakers-ecommerce-screenshot.png"
          link="https://sneakers-ecommerce-app.netlify.app/"
          title="Sneakers Ecommerce"
        />
        <Projects
          thumbnail="img/calculator-screenshot.png"
          link="https://my-calcu-app.netlify.app/"
          title="Calculator"
        />
      </div>
      <Contact />
    </div>
  );
};

export default App;
