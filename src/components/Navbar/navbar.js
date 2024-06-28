import React from "react";
import { BiChevronRight, BiSearch } from "react-icons/bi";
const Navsm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex item-center">
            Pune
            <BiChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const Navmd = () => {
  return (
    <>
      <div className="flex items-center w-full justify-evenly ml-10 mr-10">
        <div className="flex gap-3 px-6">
          <img
            className="h-9 w-34 max-w-lg"
            src="https://in.bmscdn.com/webin/common/icons/logo.svg"
            alt="logo"
          />
        </div>
        <div className="w-full flex gap-3 intems-center bg-white px-3 py-2 rounded-md">
          <BiSearch className="h-5" />
          <input
            type="search"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
};
const Navlg = () => {
  return (
    <>
      <div className="flex items-center w-full justify-evenly ml-10 mr-10">
        <div className="flex gap-3 px-6">
          <img
            className="h-9 w-34 max-w-lg"
            src="https://in.bmscdn.com/webin/common/icons/logo.svg"
            alt="logo"
          />
        </div>
        <div className="flex gap-3 intems-center bg-white px-3 py-1 rounded-md w-full">
          <BiSearch className="h-7" />
          <input
            type="search"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
            className="w-full"
          />
        </div>
        <div className="flex gap-3 items-center w-full grid justify-items-end">
          <button className="bg-red-500 text-white text-sm py-1 px-5 rounded-md items-center text-lg">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 px-2 py-4">
        <div className="md:hidden">
          {/*This is for mobile screen*/}
          <Navsm />
        </div>
        <div className="hidden md:flex lg:hidden">
          {/*This is for tablet screen*/}
          <Navmd />
        </div>
        <div className="hidden lg:flex">
          {/*This is for large screen*/}
          <Navlg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
