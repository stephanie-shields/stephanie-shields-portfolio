import * as React from "react";
import ProjectLayout from '../../components/ProjectLayout';

// markup
const fdmsGovProject = () => {
  return (
    <ProjectLayout
      pageTitle="FDMS.gov"
      previousProject="/work/recreation-gov-project"
      nextProject="/work/regulations-gov-project">
      {/* Content goes here */}
    </ProjectLayout>   
  )
}

export default fdmsGovProject;
