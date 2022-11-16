import React from "react";
import logo from "./logo.svg";

import "./App.css";
import Nav from "./components/nav";
import Hero from "./pages/hero";
import CardMovies from "./components/cardMovies";
import Foot from "./components/footer";
import ListGenre from "./components/swiper";
import Trending from "./pages/trendingMovies";

function App() {
  return (
    <div className="App bg-primary-100 max-h-full">
      <Nav />
      <Hero />
      {/* <ListGenre /> */}
      <CardMovies />
      {/* <Trending /> */}
      <Foot />
    </div>
  );
}

export default App;
