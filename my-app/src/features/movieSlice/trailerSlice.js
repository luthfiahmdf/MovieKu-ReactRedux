import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  trailer: [],
  loading: false,
};

export const getTrailer = createAsyncThunk("trailer/getTrailer", async (id) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=97caff1504fb5f9037e7c577be630b77`
    );
    console.log(res.data.results);
    return res.data.results;
  } catch (error) {
    console.log("error");
  }
});

export const trailerSlice = createSlice({
  name: "trailer",
  initialState,
  reducers: {},
  extraReducers: {
    [getTrailer.pending]: (state) => {
      state.loading = true;
    },
    [getTrailer.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.trailer = payload;
    },
    [getTrailer.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const trailerReducer = trailerSlice.reducer;
