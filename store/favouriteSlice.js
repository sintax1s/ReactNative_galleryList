import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: 'favourites',
  initialState: {
    favourites: [],
  },
  reducers: {
    addToFavourites(state, action) {
      state.favourites.push(action.payload);
    },
    removeFromFavourites(state, action) {
      const { img } = action.payload;
      state.favourites = state.favourites.filter(item => item.img !== img)
    },
  }
});

export const {addToFavourites, removeFromFavourites} = favouriteSlice.actions;

export default favouriteSlice.reducer;