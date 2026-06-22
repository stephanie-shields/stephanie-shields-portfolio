import * as React from "react";
import { projects } from '../../data/projects';
import ProjectLayout from '../../components/ProjectLayout';
import ComingSoon from "../../components/ComingSoon";

// markup
const myEverifyGovProject = () => {
  return (
    <ProjectLayout
      pageTitle={projects[4].projectTitle}
      nextProject={projects[0].projectLink}
      previousProject={projects[3].projectLink}
      badges={projects[4].projectBadges}>
      {/* Content goes here */}
      <ComingSoon></ComingSoon>
    </ProjectLayout>
  )
}

export default myEverifyGovProject;
