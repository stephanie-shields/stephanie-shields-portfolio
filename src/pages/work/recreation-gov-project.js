import * as React from "react";
import { projects } from '../../data/projects';
import ProjectLayout from '../../components/ProjectLayout';

// markup
const recreationGovProject = () => {
  return ( 
    <ProjectLayout
      pageTitle={projects[2].projectTitle}
      nextProject={projects[3].projectLink}
      previousProject={projects[1].projectLink}
      badges={projects[2].projectBadges}>
      {/* Content goes here */}
    </ProjectLayout>
  )
}

export default recreationGovProject;
