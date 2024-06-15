import React from "react";
import Layout from "../components/profileUpdate/Layout";
import JobDescriptionComponent from "../components/profileUpdate/JobDescriptionComponent";
import StateProvider from "../StateProvider";

const JobDescription = () => {
  return (
    <StateProvider>
      <Layout>
        <JobDescriptionComponent />
      </Layout>
    </StateProvider>
  );
};

export default JobDescription;
