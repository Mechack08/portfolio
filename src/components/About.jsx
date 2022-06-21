import React from "react";
import { FaAward, FaUsers, FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      <div className="header">
        <span>Get to know</span>
        <span>About me</span>
      </div>
      <div className="content">
        <div className="image">
          <img src="./about-8pro.jpg" alt="Mechackmakasi" />
        </div>
        <div className="description">
          <article>
            <div className="experience">
              <FaAward className="icon" />
              <span>Experience</span>
              <span>3+ years</span>
              <span>Working</span>
            </div>
            <div className="experience">
              <FaUsers className="icon" />
              <span>Clients</span>
              <span>5+ years</span>
              <span>Africa</span>
            </div>
            <div className="experience">
              <FaProjectDiagram className="icon" />
              <span>Projects</span>
              <span>15+ years</span>
              <span>Completed</span>
            </div>
          </article>
          <p>
            Fullstact web developper and Web Designer. I've Finished my studies
            on december 2020 in Computer science at Adventist University of
            Lukanga. I took several online courses to improve and deepen my
            knowledge in computer science. Udemy has been one of my favorite
            online courses platform.
          </p>
          <Link to="#contact">Let's talk</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
