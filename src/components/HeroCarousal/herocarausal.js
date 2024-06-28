import React from "react";
import Slider from "react-slick";

// Import CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Arrow components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const HeroCarousel = () => {
  const settings = {
    arrows: true,
    centerMode: true,
    centerPadding: "160px",
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const images = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1718864058363_1240x300pune.png",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1718711227555_adventuredesk.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1718973066360_punehumareramwebshowcase1240x300.jpg",
  ];

  return (
    <div className="bg-[#f5f5f5]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-32 h-86 px-2 py-3">
            <img
              src={image}
              alt={`carousel-${index}`}
              className="w-full h-full rounded-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
