import React from "react";

const Poster = (props) => {
  return (
    <div className="h-full px-4 cursor-pointer">
      <div>
        <img
          src={props.src}
          alt="premiereImage"
          className="w-full h-90 rounded-md"
        />
      </div>

      <h3
        className={`text-xl font-bold ${
          props.isDark ? "text-white" : "text-black"
        }`}
      >
        {props.title}
      </h3>

      <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-700"}`}>
        {props.subtitle}
      </p>
    </div>
  );
};

export default Poster;
