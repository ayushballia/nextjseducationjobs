import React from 'react'
import Layout from "../components/profileUpdate/Layout";
import PreviewComponent from '../components/profileUpdate/PreviewComponent';
import StateProvider from "../StateProvider"


const JobDescription = () => {
  return (
    <StateProvider>
      <Layout>
        <PreviewComponent />
      </Layout>
    </StateProvider>
  )
}

export default JobDescription