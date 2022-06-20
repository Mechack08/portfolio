import React from "react";
import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";
import Logo from "../../src/assets/Logo.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={Logo} alt="Website logo" />
      </div>
      <div className="navigations">
        <div className="dark-light">
          <FiSun className="show-icon" />
          <HiMoon className="hide-icon" />
        </div>
        <nav>
          <span>
            <Link to="#home" className="active">
              Home
            </Link>
          </span>
          <span>
            <Link to="#about">About me</Link>
          </span>
          <span>
            <Link to="#resume">Resume</Link>
          </span>
          <span>
            <Link to="#portfolio">Portfolio</Link>
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
