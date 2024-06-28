import React from "react";
//components
import Navbar from "../components/Navbar/navbar.js";
import HeroCarausal from "../components/HeroCarousal/herocarausal.js";
const DefaultLayout = (props) => {
  return (
    <div>
      <Navbar />
      <HeroCarausal />
      {props.children}
    </div>
  );
};

export default DefaultLayout;
