import React, { memo } from "react";
import Items from "./portfolio/Items";
import { portfolioCode, portfolioDesign } from "../data";

const Portfolio = memo(() => {
  return (
    <section id="portfolio">
      <div className="header">
        <span>What I have done ?</span>
        <span>Portfolio</span>
      </div>

      {portfolioCode ? (
        <>
          <Items type="Websites & Web Applications" data={portfolioCode} />
          <Items type="Design" data={portfolioDesign} />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  );
});

export default Portfolio;
