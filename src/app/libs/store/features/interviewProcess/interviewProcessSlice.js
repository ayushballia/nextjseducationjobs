import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  interviewMethod: null,
};

const interviewProcessSlice = createSlice({
  name: 'interviewProcess',
  initialState,
  reducers: {
    setInterviewMethod: (state, action) => {
      state.interviewMethod = action.payload;
    },
  },
});

export const { setInterviewMethod } = interviewProcessSlice.actions;

export default interviewProcessSlice.reducer;
