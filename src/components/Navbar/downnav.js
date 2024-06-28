// Downnav.js
import React from "react";

const Downnav = () => {
  return (
    <div className="flex justify-between bg-gray-100 py-2 px-4 border-b border-gray-300">
      <div className="flex space-x-4">
        <a href="#movies" className="text-black font-medium hover:underline">
          Movies
        </a>
        <a href="#stream" className="text-black font-medium hover:underline">
          Stream
        </a>
        <a href="#events" className="text-black font-medium hover:underline">
          Events
        </a>
        <a href="#plays" className="text-black font-medium hover:underline">
          Plays
        </a>
        <a href="#sports" className="text-black font-medium hover:underline">
          Sports
        </a>
        <a
          href="#activities"
          className="text-black font-medium hover:underline"
        >
          Activities
        </a>
      </div>
      <div className="flex space-x-4">
        <a
          href="#listyourshow"
          className="text-black font-medium hover:underline"
        >
          ListYourShow
        </a>
        <a
          href="#corporates"
          className="text-black font-medium hover:underline"
        >
          Corporates
        </a>
        <a href="#offers" className="text-black font-medium hover:underline">
          Offers
        </a>
        <a href="#giftcards" className="text-black font-medium hover:underline">
          Gift Cards
        </a>
      </div>
    </div>
  );
};

export default Downnav;
