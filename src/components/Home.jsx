import React, { useState } from "react";
import SideBar from "./SideBar";
import Feed from "./Feed";

const Home = () => {
  const [category, setCategory] = useState(0);

  return (
    <div className="flex">
      <SideBar category={category} setCategory={setCategory} />
      <div>
        <Feed category={category} />
      </div>
    </div>
  );
};

export default Home;
