import React, { memo, useEffect } from "react";
import Learning from "./resume-components/Learning";
import Skills from "./resume-components/Skills";

import {
  userExperience,
  userEducation,
  codeSkills,
  designSkills,
} from "../data";

const Resume = memo(() => {
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
        {codeSkills && <Skills title="Coding Skills" data={codeSkills} />}
        {designSkills && <Skills title="Design Skills" data={designSkills} />}
      </div>
    </section>
  );
});

export default Resume;
