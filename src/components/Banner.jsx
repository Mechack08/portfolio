import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="social-icons">
        <Link to="/">
          <FaLinkedinIn className="social-icon" />
        </Link>
        <Link to="/">
          <FaTwitter className="social-icon" />
        </Link>
        <Link to="/">
          <FaGithub className="social-icon" />
        </Link>
        <Link to="/">
          <FaDribbble className="social-icon" />
        </Link>
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
