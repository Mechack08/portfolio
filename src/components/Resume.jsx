import React, { memo, useEffect } from "react";
import Learning from "./resume-components/Learning";
import Skills from "./resume-components/Skills";

import { useDispatch, useSelector } from "react-redux";
import { getBackgrounds, getSkills } from "../actions/background.action";

const Resume = memo(() => {
  const dispatch = useDispatch();
  const backgrounds = useSelector((state) => state.backgroundReducer);
  const skills = useSelector((state) => state.skillReducer);

  /* Organise data */
  //Get experiences
  const getExperiences =
    backgrounds.data &&
    backgrounds.data.filter((ex) => ex.type === "experience");

  //Get educations
  const getEducations =
    backgrounds.data &&
    backgrounds.data.filter((ed) => ed.type === "education");

  //Get coding skills
  const codingSkills =
    skills.data &&
    skills.data.filter((code) => code.category === "coding skills");

  //Get design skills
  const designSkills =
    skills.data &&
    skills.data.filter((code) => code.category === "design skills");

  useEffect(() => {
    dispatch(getBackgrounds());
    dispatch(getSkills());
  }, [dispatch]);

  return (
    <section id="resume">
      <div className="header">
        <span>What skills I have ?</span>
        <span>Resume</span>
      </div>
      <div className="first-section">
        <Learning title="Experience" data={getExperiences} />
        <Learning title="Education" data={getEducations} />
      </div>
      <div className="second-section">
        {codingSkills && <Skills title="Coding Skills" data={codingSkills} />}
        {designSkills && <Skills title="Design Skills" data={designSkills} />}
      </div>
    </section>
  );
});

export default Resume;
