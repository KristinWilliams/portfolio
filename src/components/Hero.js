import React from "react";
import HeroModule from "./css/Hero.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Skills from "./Skills";
import Contact from "./Contact";

const Hero = () => {
  return (
    <div className={HeroModule.container} id="hero">
      <div>
        <NavBar />
      </div>
      <main className={HeroModule.content}>
        <div className={HeroModule["name-container"]}>
          <h1>kristin williams</h1>
          <h3>Frontend Developer</h3>
        </div>
        <div className={HeroModule["cat-img-container"]}>
          <img src="img/robot.svg" />
        </div>
      </main>
      <img src="img/border.svg" className={HeroModule.border} />
      <Skills />
      <img src="img/border.svg" className={HeroModule.border} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Hero;
