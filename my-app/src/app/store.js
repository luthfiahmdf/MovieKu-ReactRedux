import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { loginReducer } from "../features/LoginRegister/loginSlice";
import { registReducer } from "../features/LoginRegister/registerSlice";
import { castReducer } from "../features/movieSlice/castMovies";
import { genreReducer } from "../features/movieSlice/categorySlice";
import { detailReducer } from "../features/movieSlice/detailMovies";
import { listReducer } from "../features/movieSlice/genreListSlice";
import { trendingReducer } from "../features/movieSlice/movieSlice";
import { reviewReducer } from "../features/movieSlice/reviewSlice";
import { searchReducer } from "../features/movieSlice/searchSlice";
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
    search: searchReducer,
    login: loginReducer,
    regist: registReducer,
  },
});
