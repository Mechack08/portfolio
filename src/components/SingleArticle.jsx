import React from "react";
import CommentForm from "./CommentForm";

const SingleArticle = ({ data }) => {
  return (
    <article className="container">
      <span className="title">{data.title}</span>
      <span className="details">
        Published on {data.date} - By {data.author}
      </span>
      <span className="lang">{data.lang}</span>
      <span className="category">{data.category}</span>
      <div className="img-container">
        <img src={`/${data.img}`} alt={data.title} />
      </div>
      <p>{data.content}</p>
      <CommentForm />
    </article>
  );
};

export default SingleArticle;
