import React from "react";
import { FaLinkedinIn, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/mechack-makasi-172418126/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
        <a
          href="https://twitter.com/MakasiMechack"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="social-icon" />
        </a>
        <a
          href="https://github.com/Mechack08"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="social-icon" />
        </a>
        <a
          href="https://dribbble.com/Mechack08"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDribbble className="social-icon" />
        </a>
      </div>
      <div className="infos">
        <span className="function">
          <span>Web Dev. Fullstack</span>
          {/* <span>Web Designer</span> */}
        </span>
        <span className="names">Kambale Mechack</span>
        <p className="description">
          Web enthusiast and technology, I'm a web developer and UI/UX Designer.
          I've been working as a Frontend developer for more than 3 years and I
          designed several projects. Since 2019, I decided to become a full
          stack developer and I started by learning NodeJs and Express.
        </p>
      </div>
      <div className="picture">
        <img src="./8pro-2-removebg-2.png" alt="kambalemechack" />
      </div>
      <div className="buttons">
        <button>Download CV</button>
        <button>Contact me</button>
      </div>
    </div>
  );
};

export default Banner;
