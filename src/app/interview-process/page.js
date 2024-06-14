import React from 'react'
import Layout from "../components/profileUpdate/Layout";
import { JobProvider } from "../components/profileUpdate/JobContext";
import InterviewProcessComponent from '../components/profileUpdate/InterviewProcessComponent';


const JobDescription = () => {
  return (
    <JobProvider>
      <Layout>
        <InterviewProcessComponent />
      </Layout>
    </JobProvider>
  )
}

export default JobDescription