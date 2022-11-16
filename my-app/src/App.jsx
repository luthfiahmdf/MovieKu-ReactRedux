import React from "react";
import logo from "./logo.svg";

import "./App.css";
import Nav from "./components/nav";
import Hero from "./pages/hero";
import CardMovies from "./components/cardMovies";
import Foot from "./components/footer";

import Trending from "./pages/trendingMovies";

function App() {
  return (
    <div className="App bg-primary-100 xl:max-h-fit max-w-fit  ">
      <Nav />
      <Hero />

      <CardMovies />
      <Trending />
      {/* <ListGenre /> */}
      <Foot />
    </div>
  );
}

export default App;
