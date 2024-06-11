import React from 'react'
import Layout from "@/app/components/profileUpdate/Layout";
import { JobProvider } from "@/app/components/profileUpdate/JobContext";
import JobDescriptionComponent from '@/app/components/profileUpdate/JobDescriptionComponent';


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