import React from "react";
import {
  like,
  dislike,
  share,
  save,
  VIDEO,
  profile,
  user_profile,
} from "../assets";

const PlayVideo = () => {
  return (
    <div className="basis-2/3 ml-[20px] mt-[80px]">
      <video
        src={VIDEO}
        controls
        autoPlay
        className="rounded-lg outline-none"
      ></video>
      <h3 className="mt-3 font-semibold text-2xl">Best Channel on Youtube</h3>
      <div className="flex items-center justify-between flex-wrap mt-3 text-sm text-[#5a5a5a]">
        <p>150M views &bull; 2 days ago</p>
        <div className="flex items-center">
          <span className="flex items-center ml-4">
            <img src={like} alt="like" className="h-8 w-8" />
            2.5M
          </span>
          <span className="flex items-center ml-4">
            <img src={dislike} alt="dislike" className="h-8 w-8" />
          </span>
          <span className="flex items-center ml-4">
            <img src={share} alt="share" className="h-8 w-8" />
            share
          </span>
          <span className="flex items-center ml-4">
            <img src={save} alt="save" className="h-8 w-8" />
            save
          </span>
        </div>
      </div>
      <hr className="bg-[#ccc] m-3 " />
      <div className="flex leading-5">
        <img src={profile} alt="Asim" className="w-10 h-10 rounded-full mr-2" />
        <div>
          <p className="font-semibold text-black text-[18px]">Asim</p>
          <span className="text-xs">30M Subscribers</span>
        </div>
        <button className="mt-1 h-8 ml-3 font-semibold text-white bg-black border rounded-3xl px-2 pb-px">
          Subscribe
        </button>
      </div>
      <div className="pl-9 mx-4 mt-3">
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam debitis,
          quas aut ut cumque ullam dolorum aliquam, possimus, sunt veritatis
          distinctio non? Nesciunt labore doloribus sapiente. Perspiciatis nobis
          corrupti quas!
        </p>
        <p className="mt-1">subscribe for more</p>
        <hr className="my-2" />
        <h4 className="font-semibold text-lg">50k comments</h4>
        <div className="flex">
          <img
            src={user_profile}
            alt="user"
            className="w-8 h-8 rounded-full m-2"
          />
          <div>
            <div className="flex">
              <h3 className="font-medium">User Name</h3>
              <span className="text-xs mt-1 ml-1">1 day ago</span>
            </div>
            <p className="text-sm mt-1 mb-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
              provident dolores aliquam dolorum a vero, error molestiae in
              quisquam, officia officiis! Non, eligendi! Doloribus fuga aliquam
              accusantium alias, tenetur eligendi.
            </p>
            <div className="flex">
              <img src={like} alt="like" className="w-6 h-6 mr-1" />
              <span>50</span>
              <img src={dislike} alt="dislike" className="w-6 h-6 ml-3" />
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
