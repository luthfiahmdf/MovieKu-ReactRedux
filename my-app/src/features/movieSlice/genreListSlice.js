import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],

  loading: false,
};

export const getMoviesList = createAsyncThunk("list/getlist", async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=97caff1504fb5f9037e7c577be630b77"
    );
    // console.log(res);
    return res.data.genres;
  } catch (error) {
    console.log("error");
  }
});

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: {
    [getMoviesList.pending]: (state) => {
      state.loading = true;
    },
    [getMoviesList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.list = payload;
    },
    [getMoviesList.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const listReducer = listSlice.reducer;
