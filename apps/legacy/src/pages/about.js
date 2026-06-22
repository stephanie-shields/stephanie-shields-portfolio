import * as React from "react";
import PageLayout from '../components/PageLayout';
import ComingSoon from "../components/ComingSoon";

const AboutPage = () => {
  return (
    <PageLayout
      pageTitle="About">
      <ComingSoon></ComingSoon>
    </PageLayout>
  )
}

export default AboutPage
