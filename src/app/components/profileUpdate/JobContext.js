"use client"
import { createContext, useState } from 'react';

const JobContext = createContext();

const JobProvider = ({ children }) => {
  const [jobDetails, setJobDetails] = useState({});
  const [jobDescription, setJobDescription] = useState({});
  const [interviewProcess, setInterviewProcess] = useState({});

  return (
    <JobContext.Provider value={{ jobDetails, setJobDetails, jobDescription, setJobDescription, interviewProcess, setInterviewProcess }}>
      {children}
    </JobContext.Provider>
  );
};

export { JobContext, JobProvider };
