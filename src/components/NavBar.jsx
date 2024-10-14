import React from "react";
import { logo, menu, notification, profile, search, video } from "../assets";

const NavBar = () => {
  return (
    <div className="fixed w-full top-0 left-0 bg-white">
      <nav className="h-14 flex justify-between flex-col-3 flex-row z-10 border-b mx-2">
        <div className=" flex bg-white">
          <img src={menu} alt="menu" className="w-6 h-6 m-4 cursor-pointer" />
          <img src={logo} alt="youtube" className="w-8 h-6 mt-4" />
          <div className="font-bold text-[25px] mt-2">Youtube</div>
        </div>
        <div className="w-[450px] h-9 flex justify-start flex-row mt-3">
          <input
            type="text"
            placeholder="Search"
            className="w-[370px] h-[30px] border-gray-600 border rounded-l-2xl p-2 outline-none"
          />
          <div className="border border-gray-600 h-[30px] w-[52px] rounded-r-2xl bg-slate-300">
            <img
              src={search}
              alt="search"
              className="w-6 h-6 z-10 ml-2 cursor-pointer"
            />
          </div>
        </div>
        <div className="w-[186px] h-[35px] flex justify-start">
          <img
            src={video}
            alt="create"
            className="w-10 h-10 p-2 cursor-pointer rounded-full hover:bg-slate-300 m-2 hover:aria-"
          />
          <img
            src={notification}
            alt="notifications"
            className="w-10 h-10 p-2 cursor-pointer m-2 rounded-full hover:bg-slate-300 "
          />
          <img
            src={profile}
            alt="Profile"
            className="w-8 h-8 cursor-pointer m-3 rounded-full"
          />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
