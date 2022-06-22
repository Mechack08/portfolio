import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
