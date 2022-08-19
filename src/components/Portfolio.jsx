import React, { memo } from "react";
import Items from "./portfolio/Items";

import { useDispatch, useSelector } from "react-redux";
import { getPortfolios } from "../actions/portfolio.action";
import { useEffect } from "react";

const Portfolio = memo(() => {
  const dispatch = useDispatch();
  const portfolios = useSelector((state) => state.portfolioReducer);

  /* Organise data */
  //Get Coding Portfolios
  const codingPortfolios =
    portfolios.data &&
    portfolios.data.filter((item) => item.category === "web");

  const designPortfolios =
    portfolios.data &&
    portfolios.data.filter((item) => item.category === "design");

  useEffect(() => {
    dispatch(getPortfolios());
  }, [dispatch]);

  return (
    <section id="portfolio">
      <div className="header">
        <span>What I have done ?</span>
        <span>Portfolio</span>
      </div>

      {portfolios.data ? (
        <>
          <Items type="Websites & Web Applications" data={codingPortfolios} />
          <Items type="Design" data={designPortfolios} />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  );
});

export default Portfolio;
