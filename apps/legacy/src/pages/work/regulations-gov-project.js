import * as React from "react";
import { projects } from '../../data/projects';
import ProjectLayout from '../../components/ProjectLayout';
import ComingSoon from "../../components/ComingSoon";

// markup
const regulationsGovProject = () => {
  return (
    <ProjectLayout
      pageTitle={projects[3].projectTitle}
      nextProject={projects[4].projectLink}
      previousProject={projects[2].projectLink}
      badges={projects[3].projectBadges}>
      {/* Content goes here */}
      <ComingSoon></ComingSoon>
    </ProjectLayout> 
  )
}

export default regulationsGovProject;
