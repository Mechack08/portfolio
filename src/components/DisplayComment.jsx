import React from "react";

const DisplayComment = ({ comments }) => {
  return comments.map(({ id, fullname, email, comment }) => {
    return (
      <div className="display__comment" key={id}>
        <div className="user-infos">
          <div className="img-wrapper">
            <img src="/./user.png" alt="user-img" />
          </div>
          <div className="infos">
            <h3>{fullname}</h3>
            <span>{email}</span>
          </div>
        </div>
        <p>{comment}</p>
      </div>
    );
  });
};

export default DisplayComment;
