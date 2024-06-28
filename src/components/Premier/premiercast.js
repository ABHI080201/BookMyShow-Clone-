import React from "react";

import Slider from "react-slick";

import Poster from "../Poster/poster";

export const Premiercast = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    centerPadding: "200px",
    autoplay: false,
    InitialSlide: 0,
  };

  const premierimg = [
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNyBKdWw%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00396238-eqputjrazc-portrait.jpg",
      alt: "",
      title: "Divine Time Tour-Pune",
      subtitle: "Venue to be Announced: Pune",
      isDark: false,
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMSBKdWw%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00400493-rzwdqesccl-portrait.jpg",
      alt: "",
      title: "Rahul Deshpande Abhangwari",
      subtitle: "Ram Krishna Auditorum Pune",
      isDark: false,
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEp1bA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00338953-qkclbvcgjy-portrait.jpg",
      alt: "",
      title: "Charchaughi",
      subtitle: "Anna bhau sathe stadium: Pune",
      isDark: false,
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMCBKdWw%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00401667-nzbvxjdssa-portrait.jpg",
      alt: "",
      title: "International Virtula Marathon",
      subtitle: "Your Place Your Time in India",
      isDark: false,
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyOCBKdW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00355125-yjmcbajnub-portrait.jpg",
      alt: "",
      title: "Kisiko batana Anubhav Bassi",
      subtitle: "Lata Mangeshkar natyaghriha : Mumbai",
      isDark: false,
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyNiBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00365092-wrqcwktmwp-portrait.jpg",
      alt: "",
      title: "mindful tour in india ",
      subtitle: "Venue to be Announced: Pune",
      isDark: false,
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMCBKdW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00370318-bfwgkqvuun-portrait.jpg",
      alt: "",
      title: "mindful tour in india ",
      subtitle: "Venue to be Announced: Pune",
      isDark: false,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-start gap-1 py-4 px-4">
        <h3 className="text-black text-3xl font-bold">Premieres</h3>
        <p className="text-black text-sm">Brand new releases every Friday</p>
      </div>
      <Slider {...settings}>
        {premierimg.map((image) => (
          <Poster {...image} $isDark />
        ))}
      </Slider>
    </>
  );
};
