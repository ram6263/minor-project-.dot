// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProjects: null,
  userProjects : null,
  currProject : null,
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setAllProjects: (state, action) => {
      state.allProjects = action.payload;
    },
    setUserProjects : (state, action) => {
        state.userProjects = action.payload;
    },
    setCurrProject : (state, action) => {
      state.currProject = action.payload;
    },
    clearProjects: (state) => {
      state.allProjects = null;
      state.userProjects = null;
    },
  },
});

export const { setAllProjects, setUserProjects, setCurrProject, clearProjects } = projectSlice.actions;

export const selectAllProjects = (state) => state.project.allProjects;
export const selectUserProjects = (state) => state.project.userProjects;
export  const selectCurrProject = (state) => state.project.currProject;

export default projectSlice.reducer;
