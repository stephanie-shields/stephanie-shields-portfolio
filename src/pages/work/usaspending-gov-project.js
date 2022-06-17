import * as React from "react";
import ProjectLayout from '../../components/ProjectLayout';

// markup
const usaspendingGovProject = () => {
  return (
    <ProjectLayout
      pageTitle="USAspending.gov"
      previousProject="/work/myeverify-gov-project"
      nextProject="/work/recreation-gov-project"
      tags={[`UX Design`, `UI Design`, `Front End Development`]}>
      {/* Content goes here */}
    </ProjectLayout> 
  )
}

export default usaspendingGovProject;