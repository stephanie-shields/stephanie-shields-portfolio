import * as React from "react";
import ProjectLayout from '../../components/ProjectLayout';

// markup
const recreationGovProject = () => {
  return ( 
    <ProjectLayout
      pageTitle="Recreation.gov"
      previousProject="/work/usaspending-gov-project"
      nextProject="/work/fdms-gov-project">
      {/* Content goes here */}
    </ProjectLayout>
  )
}

export default recreationGovProject;
