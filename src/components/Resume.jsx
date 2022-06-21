import React from "react";
import Learning from "./resume-components/Learning";
import Skills from "./resume-components/Skills";
import {
  userEducation,
  userExperience,
  codeSkills,
  designSkills,
} from "../data";

const Resume = () => {
  return (
    <section id="resume">
      <div className="header">
        <span>What skills I have ?</span>
        <span>Resume</span>
      </div>
      <div className="first-section">
        <Learning title="Experience" data={userExperience} />
        <Learning title="Education" data={userEducation} />
      </div>
      <div className="second-section">
        <Skills title="Coding Skills" data={codeSkills} />
        <Skills title="Design Skills" data={designSkills} />
      </div>
    </section>
  );
};

export default Resume;
