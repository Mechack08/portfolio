import React from "react";
import About from "../components/About";
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
    </>
  );
};

export default Home;
