import React from "react";
import HeroModule from "./css/Hero.module.css";
import NavBar from "./NavBar";

const Hero = () => {
  return (
    <>
      <NavBar background="#D8DFFE" />
      <div className={HeroModule.container}>
        <div className={HeroModule["name-container"]}>
          <img src="img/name-shape.svg" className={HeroModule["name-shape"]} />

          <div className={HeroModule.name}>
            <h1>kristin williams</h1>
            <h2>Frontend Developer</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
