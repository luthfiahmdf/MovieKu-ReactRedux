import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  review: [],
  loading: false,
};

export const getMoviesReview = createAsyncThunk(
  "review/getReview",
  async (id) => {
    const API_KEY = "97caff1504fb5f9037e7c577be630b77";
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log("error");
    }
  }
);

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: {
    [getMoviesReview.pending]: (state) => {
      state.loading = true;
    },
    [getMoviesReview.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.review = payload;
    },
    [getMoviesReview.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const reviewReducer = reviewSlice.reducer;
