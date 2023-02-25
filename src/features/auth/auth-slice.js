import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    userType: null,
    email: null,
    password: null,
    userName: null,
  },
  reducers: {
    register(state, action) {
      state.isLoggedIn = true;
      state.email = action.payload.userEmail;
      state.password = action.payload.userPassword;
      state.userName = action.payload.userName;
    },
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    setUserType(state, action) {
      state.userType = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
