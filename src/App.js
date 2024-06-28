import React from "react";
import { Routes, Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/default.hoc";
import MovieHOC from "./HOC/Movie.hoc";

// COMPONENT
import Temp from "./components/temp";
import Navbar from "./components/Navbar/navbar";
import HeroCarausal from "./components/HeroCarousal/herocarausal";
import Homepage from "./pages/home.page";
import Movie from "./pages/Movie";
const WrappedTemp = DefaultHOC(Temp);

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<WrappedTemp />} /> */}
      <Route path="/" element={<Homepage />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  );
}

export default App;
