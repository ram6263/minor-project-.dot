// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import projectReducer from './projectSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    project : projectReducer
    // Add other reducers as needed
  },
});
