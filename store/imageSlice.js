import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ACCESS_KEY = 'ApWkpVW-cA1E6MaqDAysA3yzk0YHaPBZe5_yAm4rSYI';

export const getImages = createAsyncThunk(
  'images/getImages',
  async function (page) {
    try {
      const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&per_page=20&page=${page}`);
      return response.data; 
    } catch (error) {
      console.log(error);
      throw error;  
    }
  }
);

const imageSlice = createSlice({
  name: 'images',
  initialState: {
    images: [],
    page: 1,
    status: null,
    error: null,
  },
  reducers: {
    handleNextPage(state, action) {
      state.page = action.payload;
    },
    handlePrevPage(state, action) {
      if (state.page > 1) {
        state.page = action.payload;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.images = action.payload;
      })
      .addCase(getImages.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  }
});

export const { handleNextPage, handlePrevPage } = imageSlice.actions;

export default imageSlice.reducer;
