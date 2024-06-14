import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: '',
  jobTitle: '',
  minEx: '',
  maxEx: '',
  salary: '',
  selectedSkills: [],
  state: '',
  subject: '',
  deadline: null,
};

const jobDetailsSlice = createSlice({
  name: 'jobDetails',
  initialState,
  reducers: {
    updateJobDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
    setSelectedRole: (state, action) => {
      state.selectedRole = action.payload;
    },
    setSelectedJobType: (state, action) => {
      state.selectedJobType = action.payload;
    },
    setSelectedShiftTiming: (state, action) => {
      state.selectedShiftTiming = action.payload;
    },
    setSelectedWorkMode: (state, action) => {
      state.selectedWorkMode = action.payload;
    },
    setSelectedSkills: (state, action) => {
      state.selectedSkills = action.payload;
    },
    setDeadline: (state, action) => {
      state.deadline = action.payload;
    },
  },
});

export const {
  updateJobDetails,
  setSelectedRole,
  setSelectedJobType,
  setSelectedShiftTiming,
  setSelectedWorkMode,
  setSelectedSkills,
  setDeadline,
} = jobDetailsSlice.actions;

export default jobDetailsSlice.reducer;
