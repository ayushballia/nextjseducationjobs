import React from 'react'
import Layout from "../components/profileUpdate/Layout";
import { JobProvider } from "../components/profileUpdate/JobContext";
import JobDescriptionComponent from '../components/profileUpdate/JobDescriptionComponent';


const JobDescription = () => {
  return (
    <JobProvider>
      <Layout>
        <JobDescriptionComponent />
      </Layout>
    </JobProvider>
  )
}

export default JobDescription