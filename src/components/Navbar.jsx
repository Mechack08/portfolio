import React from "react";
import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";
import Logo from "../../src/assets/Logo.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Website logo" />
        </Link>
      </div>
      <div className="navigations">
        <div className="dark-light">
          <FiSun className="show-icon" />
          <HiMoon className="hide-icon" />
        </div>
        <nav>
          <span>
            <a a href="#home" className="active">
              Home
            </a>
          </span>
          <span>
            <a href="#about">About me</a>
          </span>
          <span>
            <a href="#resume">Resume</a>
          </span>
          <span>
            <a href="#portfolio">Portfolio</a>
          </span>
          <span>
            <Link to="/blog">Blog</Link>
          </span>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
