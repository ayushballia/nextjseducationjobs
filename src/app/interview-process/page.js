import React from 'react'
import StateProvider from '../StateProvider';
import Layout from "../components/profileUpdate/Layout";
import InterviewProcessComponent from '../components/profileUpdate/InterviewProcessComponent';


const JobDescription = () => {
  return (
    <StateProvider>
      <Layout>
        <InterviewProcessComponent />
      </Layout>
    </StateProvider>
  )
}

export default JobDescription