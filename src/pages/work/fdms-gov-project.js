import * as React from "react";
import { projects } from '../../data/projects';
import ProjectLayout from '../../components/ProjectLayout';

// markup
const fdmsGovProject = () => {
  return (
    <ProjectLayout
      pageTitle={projects[1].projectTitle}
      nextProject={projects[2].projectLink}
      previousProject={projects[0].projectLink}
      badges={projects[1].projectBadges}>
      {/* Content goes here */}
    </ProjectLayout>   
  )
}

export default fdmsGovProject;
