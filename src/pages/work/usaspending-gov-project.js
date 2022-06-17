import * as React from "react";
import { projects } from '../../data/projects';
import ProjectLayout from '../../components/ProjectLayout';

// markup
const usaspendingGovProject = () => {
  return (
    <ProjectLayout
      pageTitle={projects[0].projectTitle}
      nextProject={projects[1].projectLink}
      previousProject={projects[4].projectLink}
      badges={projects[0].projectBadges}>
      {/* Content goes here */}
    </ProjectLayout> 
  )
}

export default usaspendingGovProject;