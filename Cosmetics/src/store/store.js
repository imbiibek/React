import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../redux/blogSlice.js"

export const store = configureStore({
  reducer: {
    blog:blogSlice
  },
});