import * as React from "react";
import ProjectLayout from '../../components/ProjectLayout';

// markup
const myEverifyGovProject = () => {
  return (
    <ProjectLayout
      pageTitle="myEverify.gov"
      previousProject="/work/regulations-gov-project"
      nextProject="/work/usaspending-gov-project"
      tags={[`UI Design`, `Front End Development`]}>
      {/* Content goes here */}
    </ProjectLayout>
  )
}

export default myEverifyGovProject;