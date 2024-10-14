import React from "react";
import SideBar from "./SideBar";
import Feed from "./Feed";

const Home = ({ sideBar }) => {
  return (
    <div className="flex">
      <SideBar sideBar={sideBar} />
      <div>
        <Feed />
      </div>
    </div>
  );
};

export default Home;
