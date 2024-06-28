import React from "react";
import Slider from "react-slick";

const crew = [
  {
    name: "Nag Ashwin",
    role: "Director, Writer",
    imgSrc:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nag-ashwin-1052409-09-03-2017-04-25-08.jpg",
  },
  {
    name: "C. Ashwini Dutt",
    role: "Producer",
    imgSrc:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/c.-ashwini-dutt-iein024153-12-04-2018-15-00-27.jpg",
  },
  {
    name: "Priyanka Dutt",
    role: "Producer",
    imgSrc:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/priyanka-dutta-1060391-30-04-2018-12-42-36.jpg",
  },
  {
    name: "Swapna Dutt",
    role: "Producer",
    imgSrc:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/swapna-dutt-iein113443-30-04-2018-12-55-44.jpg",
  },
  {
    name: "Santhosh Narayanan",
    role: "",
    imgSrc:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/santhosh-narayanan-1068255-1663739610.jpg",
  },
  {
    name: "Kotagiri Venkateswara Rao",
    role: "",
    imgSrc:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kotagiri-venkateswara-rao-iein010085-24-03-2017-14-32-14.jpg",
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

const Crew = () => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-4 ml-[+20px]">Crew</h2>
      <Slider {...settings}>
        {crew.map((member, index) => (
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

export default Crew;
