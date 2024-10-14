import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Video from "./components/Video";
import { useState } from "react";

const App = () => {
  const [sideBar, setSideBar] = useState(true);

  return (
    <BrowserRouter>
      <NavBar setSideBar={setSideBar} />
      <Routes>
        <Route path="/" element={<Home sideBar={sideBar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
