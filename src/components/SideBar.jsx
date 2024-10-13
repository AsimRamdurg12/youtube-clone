import React from "react";
import {
  home,
  automobiles,
  news,
  games,
  technology,
  vlogs,
  entertainment,
  music,
} from "../assets";

const SideBar = () => {
  return (
    <div>
      <div className="h-screen">
        <div>
          <img src={home} alt="home" />
          <p>Home</p>
        </div>
        <div>
          <img src={technology} alt="technology" />
          <p>Technology</p>
        </div>
        <div>
          <img src={games} alt="games" />
          <p>Games</p>
        </div>
        <div>
          <img src={news} alt="news" />
          <p>News</p>
        </div>
        <div>
          <img src={vlogs} alt="vlogs" />
          <p>Vlogs</p>
        </div>
        <div>
          <img src={automobiles} alt="automobiles" />
          <p>Automobiles</p>
        </div>
        <div>
          <img src={entertainment} alt="entertainment" />
          <p>Entertainment</p>
        </div>
        <div>
          <img src={music} alt="music" />
          <p>Music</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
