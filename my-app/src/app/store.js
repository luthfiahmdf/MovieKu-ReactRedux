import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { castReducer } from "../features/movieSlice/castMovies";
import { detailReducer } from "../features/movieSlice/detailMovies";
import { listReducer } from "../features/movieSlice/genreListSlice";
import { trendingReducer } from "../features/movieSlice/movieSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    trending: trendingReducer,
    list: listReducer,
    detail: detailReducer,
    cast: castReducer,
  },
});
