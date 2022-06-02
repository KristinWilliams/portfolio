import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="name-container">
        <img src="img/name-shape.svg" className="name-shape" />

        <div className="name">
          <h1>kristin williams</h1>
          <h2>Frontend Developer</h2>
        </div>
      </div>
      <img src="img/down-arrow.svg" alt="down arrow" className="down-arrow" />
    </div>
  );
};

export default Hero;
