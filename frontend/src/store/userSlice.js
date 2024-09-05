// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  status : false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
      state.status = true;
    },
    clearUser: (state) => {
      state.userData = null;
      state.status = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const selectUser = (state) => state.user.userData;

export default userSlice.reducer;
