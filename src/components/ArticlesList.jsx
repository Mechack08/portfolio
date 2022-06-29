import React from "react";
import { Link } from "react-router-dom";
import { splitText } from "../helper";

const ArticlesList = ({ data }) => {
  console.log(splitText(data[0].content));
  return (
    <div className="article-list">
      {data.map(({ id, title, author, date, lang, content, img }) => {
        return (
          <div className="article" key={id}>
            <div className="img-container">
              <img src={img} alt={title} />
            </div>
            <div className="details">
              <Link to="/blog/6576576" className="title">
                {title}
              </Link>
              <div className="container-2">
                <span className="date">{date}</span>
                <span className="author">{author}</span>
              </div>
              <span className="lang">In {lang}</span>
              <p>{splitText(content)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArticlesList;
