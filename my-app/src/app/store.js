import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { castReducer } from "../features/movieSlice/castMovies";
import { genreReducer } from "../features/movieSlice/categorySlice";
import { detailReducer } from "../features/movieSlice/detailMovies";
import { listReducer } from "../features/movieSlice/genreListSlice";
import { trendingReducer } from "../features/movieSlice/movieSlice";
import { reviewReducer } from "../features/movieSlice/reviewSlice";
import { trailerReducer } from "../features/movieSlice/trailerSlice";
import { tvShowReducer } from "../features/movieSlice/trendingSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    trending: trendingReducer,
    list: listReducer,
    detail: detailReducer,
    cast: castReducer,
    genre: genreReducer,
    trailer: trailerReducer,
    review: reviewReducer,
  },
});
