import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play_icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      {/* ----------------About leftside------------------ */}
      <div className="about-left">
        <img className="about-img" src={about_img} />
        <img
          className="play-icon"
          src={play_icon}
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>

      {/* ----------------About rightside------------------ */}
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>
          Offering undergraduate, postgraduate, and doctoral in Engineering
        </h2>
        <p>
          Engineering is the application of scientific principles and
          mathematical methods to innovate, design, and create solutions for
          real-world problems. It is a multidisciplinary field that spans
          various domains, aiming to enhance human life, improve efficiency, and
          develop sustainable systems and technologies. Engineers blend
          creativity with technical expertise to solve challenges in industries
          such as construction, energy, healthcare, transportation, and
          technology.
        </p>
      </div>
    </div>
  );
};

export default About;
