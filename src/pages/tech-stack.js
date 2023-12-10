import * as React from "react";
import PageLayout from '../components/PageLayout';
import TechStackList from "../components/TechStackList";
// import ComingSoon from "../components/ComingSoon";

const TechStackPage = () => {
  return (
    <PageLayout
      pageTitle="Tech Stack">
      <TechStackList />
    </PageLayout>
  );
};

export default TechStackPage;
