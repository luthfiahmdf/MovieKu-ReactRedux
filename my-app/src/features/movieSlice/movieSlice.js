import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: [],
  loading: false,
};

export const getTrending = createAsyncThunk(
  "trending/getTrending",
  async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular`,
        {
          params: {
            api_key: "97caff1504fb5f9037e7c577be630b77",
          },
        }
      );
      // console.log(res);
      return res.data.results;
    } catch (error) {
      console.log("error");
    }
  }
);

export const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
  extraReducers: {
    [getTrending.pending]: (state) => {
      state.loading = true;
    },
    [getTrending.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [getTrending.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const trendingReducer = trendingSlice.reducer;
