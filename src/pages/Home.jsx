import React, { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showClass, setShowClass] = useState(false);

  useEffect(() => {
    const handlePosition = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      if (position >= 565) {
        setShowClass(true);
      } else {
        setShowClass(false);
      }
    };

    window.addEventListener("scroll", handlePosition);
  }, [scrollPosition, showClass]);

  return (
    <>
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
      <div className={showClass && "btn-up"}>
        <a href="#home">up</a>
      </div>
    </>
  );
};

export default Home;
