import * as React from "react";
import { projects } from '../../data/projects';
import ProjectLayout from '../../components/ProjectLayout';
import ComingSoon from "../../components/ComingSoon";

// markup
const recreationGovProject = () => {
  return ( 
    <ProjectLayout
      pageTitle={projects[2].projectTitle}
      nextProject={projects[3].projectLink}
      previousProject={projects[1].projectLink}
      badges={projects[2].projectBadges}>
      {/* Content goes here */}
      <ComingSoon></ComingSoon>
    </ProjectLayout>
  )
}

export default recreationGovProject;
