import React from "react";
import Slider from "react-slick";

const cast = [
  {
    name: "Prabhas",
    role: "as Bhairava",
    imgSrc:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prabhas-1708-1686915417.jpg",
  },
  {
    name: "Deepika Padukone",
    role: "Actor",
    imgSrc:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/deepika-padukone-2822-12-09-2017-06-31-43.jpg",
  },
  {
    name: "Amitabh Bachchan",
    role: "as Ashwatthama",
    imgSrc:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/amitabh-bachchan-138-12-09-2017-02-34-37.jpg",
  },
  {
    name: "Kamal Haasan",
    role: "Actor",
    imgSrc:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kamal-haasan-2886-24-03-2017-17-54-38.jpg",
  },
  {
    name: "Disha Patani",
    role: "Actor",
    imgSrc:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/disha-patani-1061408-1714379037.jpg",
  },
  {
    name: "Pasupathy Ramasamy",
    role: "Actor",
    imgSrc:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/pasupathy-ramasaamy-6875-24-03-2017-17-50-02.jpg",
  },
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  centerPadding: "200px",
  autoplay: false,
  InitialSlide: 0,
};

const Cast = () => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-4 ml-[+20px]">Cast</h2>
      <Slider {...settings}>
        {cast.map((member, index) => (
          <div key={index} className="text-center px-1 py-2">
            <img
              src={member.imgSrc}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mx-auto"
            />
            <h3 className="mt-2 font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cast;
