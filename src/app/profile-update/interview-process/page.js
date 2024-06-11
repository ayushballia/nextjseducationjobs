import React from 'react'
import Layout from "@/app/components/profileUpdate/Layout";
import { JobProvider } from "@/app/components/profileUpdate/JobContext";
import InterviewProcessComponent from '@/app/components/profileUpdate/InterviewProcessComponent';




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