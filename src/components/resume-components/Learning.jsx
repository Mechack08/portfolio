import React from "react";

const Learning = ({ title, data }) => {
  return (
    <div className="learning-container">
      <span className="title-underline">{title}</span>
      {data.map(({ date, institut, position, description }, index) => {
        return (
          <div className="learning-content" key={index}>
            <div className="date-position">
              <span>{date}</span>
              <span>{institut}</span>
            </div>
            <span>{position}</span>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Learning;
