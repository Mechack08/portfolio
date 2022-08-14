import React from "react";

const Learning = ({ title, data }) => {
  return (
    <div className="learning-container">
      <span className="title-underline">{title}</span>

      {data ? (
        data.map(({ _id, period, institution, position, description }) => {
          return (
            <div className="learning-content" key={_id}>
              <div className="date-position">
                <span>{period}</span>
                <span>{institution}</span>
              </div>
              <span>{position}</span>
              <p>{description}</p>
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Learning;
