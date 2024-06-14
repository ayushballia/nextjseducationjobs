import React from 'react'
import Layout from "../components/profileUpdate/Layout";
import { JobProvider } from "../components/profileUpdate/JobContext";
import PreviewComponent from '../components/profileUpdate/PreviewComponent';


const JobDescription = () => {
  return (
    <JobProvider>
      <Layout>
        <PreviewComponent />
      </Layout>
    </JobProvider>
  )
}

export default JobDescription