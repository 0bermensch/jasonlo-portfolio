import React from "react";
import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";
import Project4 from "./Projects/Project4";
import Project5 from "./Projects/Project5";
import Project7 from "./Projects/Project7";

const Projects = () => {
  return (
    <div className="project" id="projects">
      <div className="projectitle">Projects</div>
      <div className="project__container">
        <Project7 />
        <Project3 />
        <Project4 />
        <Project5 />
        <Project1 />
        <Project2 />
      </div>
    </div>
  );
};

export default Projects;
