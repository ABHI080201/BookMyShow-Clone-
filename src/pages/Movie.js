import React from "react";
import MovieNavbar from "../components/Navbar/Movie.navbar";
import Downnav from "../components/Navbar/downnav";
import MovieContent from "../components/Entertainment/moviecard";
import Crew from "../components/cast/crew";
import Cast from "../components/cast/cast";
import Review from "../components/cast/reviewmovie";

const Movie = () => {
  return (
    <>
      <div>
        <MovieNavbar />
        <Downnav />
        <MovieContent />
        <div className="text-start ml-[+100px] my-10">
          <h1 className="text-4xl font-bold mb-5">About the movie</h1>
          <p className="text-gray-700">
            When the world is taken over by darkness. A force will rise.
          </p>
        </div>
        <div className="w-[926px]  ml-[+100px] border-b-black">
          <Cast />
        </div>
        <div className="w-[926px]  ml-[+100px]">
          <Crew />
        </div>
        <div className="w-[926px]  ml-[+120px]">
          <Review />
        </div>
      </div>
    </>
  );
};
export default Movie;
