import React from "react";
import ArticlesList from "../components/ArticlesList";
import Navbar from "../components/Navbar";
import SearchBar from "./SearchBar";
import { articles } from "../data";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="blog-container">
        <SearchBar />
        <ArticlesList data={articles} />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
