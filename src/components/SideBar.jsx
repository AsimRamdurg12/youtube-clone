import React, { useState } from "react";
import {
  home,
  automobiles,
  news,
  games,
  technology,
  vlogs,
  entertainment,
  music,
  gerard,
  megan,
  simon,
  cameron,
  tom,
} from "../assets";

const SideBar = () => {
  return (
    <div className="w-[240px] h-screen top-0 pl-3 pt-[80px] bg-slate-100 ">
      <div>
        <div className="flex items-center mb-5 flex-wrap cursor-pointer">
          <img src={home} alt="home" className="w-5 mr-5" />
          <p>Home</p>
        </div>
        <div className="flex items-center mb-5 flex-wrap cursor-pointer">
          <img src={technology} alt="technology" className="w-5 mr-5" />
          <p>Technology</p>
        </div>
        <div className="flex items-center mb-5 flex-wrap cursor-pointer">
          <img src={games} alt="games" className="w-5 mr-5" />
          <p>Games</p>
        </div>
        <div className="flex items-center mb-5 flex-wrap cursor-pointer">
          <img src={news} alt="news" className="w-5 mr-5" />
          <p>News</p>
        </div>
        <div className="flex items-center mb-5 flex-wrap cursor-pointer">
          <img src={vlogs} alt="vlogs" className="w-5 mr-5" />
          <p>Vlogs</p>
        </div>
        <div className="flex items-center mb-5 flex-wrap cursor-pointer">
          <img src={automobiles} alt="automobiles" className="w-5 mr-5" />
          <p>Automobiles</p>
        </div>
        <div className="flex items-center mb-5 flex-wrap cursor-pointer">
          <img src={entertainment} alt="entertainment" className="w-5 mr-5" />
          <p>Entertainment</p>
        </div>
        <div className="flex items-center mb-5 flex-wrap cursor-pointer">
          <img src={music} alt="music" className="w-5 mr-5" />
          <p>Music</p>
        </div>
        <hr className="w-4/5" />
      </div>
      <div>
        <h3 className="text-lg font-medium mx-5 text-[#5a5a5a]">Subscribed</h3>
        <div className="flex items-center mb-5 flex-wrap cursor-pointer">
          <img
            src={gerard}
            alt="HomeLander"
            className="w-5 mr-5 rounded-full"
          />
          <p>HomeLander</p>
        </div>
        <div className="flex items-center mb-5 flex-wrap cursor-pointer">
          <img
            src={megan}
            alt="Megan Foxx"
            className="w-5 mr-5 rounded-full "
          />
          <p>Megan Foxx</p>
        </div>
        <div className="flex items-center mb-5 flex-wrap cursor-pointer">
          <img
            src={simon}
            alt="Simon Go Back"
            className="w-5 mr-5 rounded-full"
          />
          <p>Simon Go Back</p>
        </div>
        <div className="flex items-center mb-5 flex-wrap cursor-pointer">
          <img
            src={cameron}
            alt="Programming with Cameron"
            className="w-5 mr-5 rounded-full"
          />
          <p>CameronCodes</p>
        </div>
        <div className="flex items-center mb-5 flex-wrap cursor-pointer">
          <img src={tom} alt="Life Hacks" className="w-5 mr-5 rounded-full" />
          <p>Life Hacks</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
