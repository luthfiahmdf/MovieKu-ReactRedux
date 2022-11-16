import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: [],
  loading: false,
};

export const getTvShow = createAsyncThunk("tvShow/getTvShow", async () => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=97caff1504fb5f9037e7c577be630b77`
    );
    // console.log(res);
    return res.data.results;
  } catch (error) {
    console.log("error");
  }
});

export const tvShowSlice = createSlice({
  name: "tvShow",
  initialState,
  reducers: {},
  extraReducers: {
    [getTvShow.pending]: (state) => {
      state.loading = true;
    },
    [getTvShow.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [getTvShow.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const tvShowReducer = tvShowSlice.reducer;
