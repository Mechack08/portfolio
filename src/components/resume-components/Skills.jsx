import React from "react";

const Skills = ({ title, data }) => {
  return (
    <div className="skills-container">
      <span className="title-underline">{title}</span>
      {data.map(({ _id, subject, level }) => {
        return (
          <div className="skill" key={_id}>
            <div className="skill-header">
              <span className="skill-name">{subject}</span>
              <span className="skill-pourcentage">{`${level}%`}</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-bar-level"
                style={{ width: `${level}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
