import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";
import Logo from "../../src/assets/Logo.svg";

const Navbar = () => {
  const [widthSize, setWidthSize] = useState(window.innerWidth);
  const [menuClass, setMenuClass] = useState("menu-humberger none");
  const [hideMenus, setHideMenus] = useState("hide");

  const location = useLocation();

  const activeLink = (path) => {
    let class_name = undefined;
    if (location.pathname === path) {
      class_name = "active";
    }

    return class_name;
  };

  const handleClass = () => {
    if (menuClass === "menu-humberger none") {
      setMenuClass("menu-humberger");
    } else if (menuClass === "menu-humberger") {
      setMenuClass("menu-humberger cross");
      setHideMenus("");
    } else {
      setMenuClass("menu-humberger");
      setHideMenus("hide");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      const size = window.innerWidth;
      setWidthSize(size);

      if (size > 810) {
        setMenuClass("menu-humberger none");
        setHideMenus("hide");
      } else {
        setMenuClass("menu-humberger");
        setHideMenus("hide");
      }
    });
  }, [widthSize]);

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
        <nav className={hideMenus}>
          <span>
            {location.pathname === "/" ? (
              <a href="#home" className={activeLink("/")}>
                Home
              </a>
            ) : (
              <Link to="/" className={activeLink("/")}>
                Home
              </Link>
            )}
          </span>
          {location.pathname === "/" && (
            <>
              <span>
                <a href="#about">About me</a>
              </span>
              <span>
                <a href="#resume">Resume</a>
              </span>
              <span>
                <a href="#portfolio">Portfolio</a>
              </span>
            </>
          )}
          <span>
            <Link to="/blog" className={activeLink("/blog")}>
              Blog
            </Link>
          </span>
        </nav>
        <div className={menuClass} onClick={handleClass}>
          <div className="middle-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
