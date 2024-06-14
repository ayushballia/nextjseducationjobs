import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  qualification: "",
  course: "",
  fresher: false,
  minEx: "",
  maxEx: "",
  englishLevel: [],
  vacancies: "",
  selectedGender: { label: "Teaching", icon: "MaleIcon" }, // Adjust default value as needed
  "min-age": "",
  "max-age": "",
  language: "",
  assets: "",
};

const jobDescriptionSlice = createSlice({
  name: 'jobDescription',
  initialState,
  reducers: {
    setJobDescription: (state, action) => {
      return { ...state, ...action.payload };
    },
    setQualification: (state, action) => {
      state.qualification = action.payload;
    },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setFresher: (state, action) => {
      state.fresher = action.payload;
    },
    setMinEx: (state, action) => {
      state.minEx = action.payload;
    },
    setMaxEx: (state, action) => {
      state.maxEx = action.payload;
    },
    setEnglishLevel: (state, action) => {
      state.englishLevel = action.payload;
    },
    setVacancies: (state, action) => {
      state.vacancies = action.payload;
    },
    setSelectedGender: (state, action) => {
      state.selectedGender = action.payload;
    },
    setMinAge: (state, action) => {
      state["min-age"] = action.payload;
    },
    setMaxAge: (state, action) => {
      state["max-age"] = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setAssets: (state, action) => {
      state.assets = action.payload;
    },
  },
});

export const {
  setJobDescription,
  setQualification,
  setCourse,
  setFresher,
  setMinEx,
  setMaxEx,
  setEnglishLevel,
  setVacancies,
  setSelectedGender,
  setMinAge,
  setMaxAge,
  setLanguage,
  setAssets,
} = jobDescriptionSlice.actions;

export default jobDescriptionSlice.reducer;
