import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
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
      <Footer />
    </>
  );
};

export default Home;
