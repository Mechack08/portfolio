import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SingleArticle from "../components/SingleArticle";
import { articles } from "../data";

const Article = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <SingleArticle data={articles[0]} />
      <Footer />
    </div>
  );
};

export default Article;
