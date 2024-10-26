import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Slice/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
