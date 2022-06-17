import * as React from "react";
import { projects } from '../../data/projects';
import ProjectLayout from '../../components/ProjectLayout';

// markup
const regulationsGovProject = () => {
  return (
    <ProjectLayout
      pageTitle={projects[3].projectTitle}
      nextProject={projects[4].projectLink}
      previousProject={projects[2].projectLink}
      badges={projects[3].projectBadges}>
      {/* Content goes here */}
    </ProjectLayout> 
  )
}

export default regulationsGovProject;
