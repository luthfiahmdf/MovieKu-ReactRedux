import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "swiper/css/bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import Search from "./pages/search";
import Detail from "./pages/detali";
import Category from "./pages/category";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<App />} />
            <Route path="/:id" element={<Detail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/category/:name" element={<Category />} />
            {/* <Route path="/search/:name" element={<Search />} />
              <Route path="/genre/:name" element={<Genre />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
