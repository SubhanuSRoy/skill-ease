// this file is the main store which will contain ALL the data of ALL the features

import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/auth-slice';

export const store = configureStore({
  reducer: {
    auth:authSlice.reducer
  },
});
