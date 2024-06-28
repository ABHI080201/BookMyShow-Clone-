import React from "react";

import HeroCarousel from "../components/HeroCarousal/herocarausal";

import EntertainmentSlider from "../components/Entertainment/Entertinmentcard";
import Navbar from "../components/Navbar/navbar";
import { Premier } from "../components/Premier/premier";
import Entertainter from "../components/Entertainment/entertainter";
import { Premiercast } from "../components/Premier/premiercast";

import Downnav from "../components/Navbar/downnav";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Downnav />
      <HeroCarousel />
      <div className="bg-[#f5f5f5]">
        <div className="container mx-auto px-5 lg:px-20 bg-[#f5f5f5]">
          <h1 className="text-2xl font-bold text-black-900 my-3 mb-[-2px] ml-[+10px]">
            Recommended Movies
          </h1>
          <EntertainmentSlider />
        </div>
        <div className="w-full mx-auto my-4 mt-[+70px] flex justify-center bg-[#f5f5f5]">
          <img
            className="w-full max-w-[83.5rem]"
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png"
            alt="Image-11"
          />
        </div>
        <div className="container mx-auto lg:px-20 bg-[#f5f5f5]">
          <Entertainter />
        </div>
        <div className="container mx-auto px-20 bg-[#2b3149] h-[700px] ">
          <Premier />
        </div>
        <div className="container mx-auto px-20 bg-[#f5f5f5] mt-10">
          <Premiercast />
        </div>
      </div>
    </>
  );
};

export default Homepage;
