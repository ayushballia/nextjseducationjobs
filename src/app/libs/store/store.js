import { configureStore } from '@reduxjs/toolkit'
import jobDetailsReducer from './features/jobDetails/jobDetailsSlice'
import jobDescriptionReducer from './features/jobDescription/jobDescriptionSlice'
import interviewProcessReducer from './features/interviewProcess/interviewProcessSlice'

export default configureStore({
  reducer: {
    jobDetails: jobDetailsReducer,
    jobDescription: jobDescriptionReducer,
    interviewProcess: interviewProcessReducer,
  }
})

