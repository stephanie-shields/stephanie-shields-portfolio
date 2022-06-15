import * as React from "react";
import ProjectLayout from '../../components/ProjectLayout';

// markup
const regulationsGovProject = () => {
  return (
    <ProjectLayout
      pageTitle="Regulations.gov"
      previousProject="/work/fdms-gov-project"
      nextProject="/work/myeverify-gov-project"
      tags={[`UX Design`, `UI Design`, `Front End Development`]}>
      {/* Content goes here */}
    </ProjectLayout> 
  )
}

export default regulationsGovProject;
