import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from './favouriteSlice';
import imageSlice from "./imageSlice";

export default configureStore({
  reducer: {
    favourites: favouriteSlice,
    images: imageSlice,
  },
})