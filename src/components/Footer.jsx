import React from "react";
import { FaLinkedinIn, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-side">
        <span>Why have I decided to add a blog in my portfolio website ?</span>
        <p>
          After getting several free courses in the Internet, I decided to also
          share with others my knowledge. A certain say goes "Who teaches learns
          twice". This is what motivates me to share my knowledge with others.
        </p>
        <div className="socials">
          <span>Follow me</span>
          <a
            href="https://www.linkedin.com/in/mechack-makasi-172418126/"
            className="wrapper linkin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="social-icon" />
          </a>
          <a
            href="https://twitter.com/MakasiMechack"
            className="wrapper twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
          <a
            href="https://github.com/Mechack08"
            className="wrapper github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://dribbble.com/Mechack08"
            className="wrapper dribbble"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDribbble className="social-icon" />
          </a>
        </div>
      </div>
      <div className="right-side">
        <span>&copy;8pro - 2022 All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
