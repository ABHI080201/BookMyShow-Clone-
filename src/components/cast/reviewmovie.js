import React from "react";
import Slider from "react-slick";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import SwiperCore, { Navigation } from "swiper/core";

const Reviewcard = (props) => {
  return (
    <>
      <div className="mx-3 h-[40px] w-[200px]  rounded-lg p-4 shadow-lg border-3 border-gray-800 py-2 rounded-[30px] border-black flex justify-center ">
        <span className="text-red-700">{props.src}</span>
      </div>
    </>
  );
};

const reviews = [
  {
    username: "User",
    rating: "8/10",
    hashtags: "#WowMusic #Unbelievable #Wellmade #Awesome",
    content:
      "In Whole movie Amitabh Bachchan is star in front of all viewers but real star is Nag Ashwin and team. This movie is care of address for upcoming sci...",
    likes: "3.2K",
    time: "1 Day ago",
  },
  {
    username: "Murthy",
    rating: "9/10",
    hashtags: "",
    content:
      "first half kuncham slow start but second half archkamm - Visual Treat and Wonders : Suspense Characters and Nag Ashwin. Indian Cinema...",
    likes: "1.7K",
    time: "1 Day ago",
  },
];

export const ReviewSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: "200px",
    autoplay: false,
    InitialSlide: 0,
  };
  return (
    <div className="container mx-auto py-8 w-[930px]">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="border rounded-lg p-4 shadow-lg w-[400px] h-[250px]">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                <div className="ml-4">
                  <div className="font-bold">{review.username}</div>
                  <div className="flex items-center text-red-500">
                    <span className="mr-1">{review.rating}</span>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm text-gray-600">{review.hashtags}</div>
                <div className="mt-2 text-gray-800">{review.content}</div>
              </div>
              <div className="mt-4 flex items-center justify-between text-gray-600 text-sm">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>{review.likes}</span>
                </div>
                <div>{review.time}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

const Review = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "100px",
    autoplay: false,
    InitialSlide: 0,
  };

  const datadd = [
    "#Blockbuster  77099",
    "#SuperDirection  74835",
    "#GreatActing  59449",
    "#Blockbuster  77099",
    "#SuperDirection  74835",
    "#GreatActing  9443",
  ];
  return (
    <>
      <div className="flex-col">
        <div className="flex-col">
          <div className="flex  w-[920px] px-2 py-4">
            <h2 className="text-2xl font-bold text-sans-serif ml-3">
              Top reviews
            </h2>
            <div>
              <span className="text-xl text-bold ml-[+600px] text-red-600">
                108K Reviews
              </span>
              <span className="text-red-600 text-xl ml-1">{">"}</span>
            </div>
          </div>
          <div className=" w-[920px] h-[100px]">
            <span className="text-gray-600 ml-5">Summary of 108K reviews</span>
            <Slider {...settings}>
              {datadd.map((data) => (
                <Reviewcard src={data} />
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-[820px]">
          <ReviewSlider />
        </div>
      </div>
    </>
  );
};
export default Review;
