import React from "react";
import DisplayComment from "./DisplayComment";
import { userComment } from "../data";

const CommentForm = () => {
  return (
    <div className="comment-form-container">
      <h2>2 Comments</h2>
      <form action="">
        <input type="text" name="fullname" placeholder="Full name" />
        <input type="email" name="email" placeholder="Email Address" />
        <textarea name="message" placeholder="Message"></textarea>
        <button>Comment</button>
      </form>
      <DisplayComment comments={userComment} />
    </div>
  );
};

export default CommentForm;
