import React from "react";
import logo from "./logo.svg";

import "./App.css";
import Nav from "./components/nav";
import Hero from "./pages/hero";
import CardMovies from "./components/cardMovies";
import Foot from "./components/footer";
import ListGenre from "./components/swiper";

function App() {
  return (
    <div className="background">
      <div className="App mx-9">
        <Nav />
        <Hero />
        {/* <ListGenre /> */}
        <CardMovies />
        <Foot />
      </div>
    </div>
  );
}

export default App;
