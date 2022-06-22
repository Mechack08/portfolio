import React from "react";
import Items from "./portfolio/Items";
import { portfolioCode, portfolioDesign } from "../data";

const Portfolio = () => {
  return (
    <section id="portofio">
      <div className="header">
        <span>What I have done ?</span>
        <span>Portfolio</span>
      </div>

      <Items type="Websites & Web Applications" data={portfolioCode} />
      <Items type="Design" data={portfolioDesign} />
    </section>
  );
};

export default Portfolio;
