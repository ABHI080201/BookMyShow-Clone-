// MovieContent.js
import React from "react";

const MovieContent = () => {
  return (
    <div className="relative flex bg-black text-white p-4 h-[500px] flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35 z-0 h-[500px]"
        style={{
          backgroundImage:
            "url(https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/kalki-2898-ad-et00352941-1718275859.jpg)",
        }}
      ></div>
      <div className="relative flex-none  z-10 ml-[+120px]">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MS4yTSBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00352941-vlynhuektb-portrait.jpg"
          alt="Kalki 2898 AD"
          className="rounded-md w-max h-[400px]"
        />
      </div>
      <div className="relative flex-grow z-10 ml-[30px]">
        <h1 className="text-4xl font-bold ">Kalki 2898 AD</h1>
        <div className="flex items-center mt-2 place-content-between">
          <div className="bg-gray-800 p-2 rounded-lg flex items-center w-[450px] h-[70px] ">
            <span className="text-2xl font-bold text-red-500 ml-3">★</span>
            <span className="ml-2 text-2xl">9.4/10 (50.9K Votes)</span>
            <button className="bg-white text-black py-1 px-3 ml-[+60px] rounded-md w-[110px] h-[50px] text-xl">
              Rate now
            </button>
          </div>
        </div>

        <div className="flex flex-wrap mt-4 space-x-2 flex-col">
          <div>
            <span className="bg-gray-200 p-2 rounded-md ml-2 text-black">
              2D, IMAX 2D, IMAX 3D, 3D
            </span>
          </div>
          <div className="mt-6">
            <span className="bg-gray-200 p-2 rounded-md text-black ">
              Telugu, Hindi, Tamil, Kannada, Malayalam
            </span>
          </div>
        </div>
        <div className="mt-4 ml-2">
          <p className="text-md">
            3h 1m • Action, Sci-Fi, Thriller • UA • 27 Jun, 2024
          </p>
        </div>
        <button className="mt-4 bg-[#f84464] text-white py-2 px-4 rounded-md ml-2 w-[200px] h-[50px] text-xl">
          Book tickets
        </button>
      </div>
    </div>
  );
};

export default MovieContent;
