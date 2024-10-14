import React from "react";
import { thumbnail1 } from "../assets";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <div className="grid grid-cols-3 gap-2 mt-[80px] mx-2">
      <Link to={`/video/20/4541`}>
        <img src={thumbnail1} alt="thumbnail" className="rounded-lg" />
        <h2 className="font-semibold text-lg text-[#000] mx-1">
          Best Channel on youtube
        </h2>
        <h3 className="font-medium text-base text[#555] mx-1">Asim</h3>
        <p>150M views &bull; 2 days ago</p>
      </Link>
      <div>
        <img src={thumbnail1} alt="thumbnail" className="rounded-lg" />
        <h2 className="font-semibold text-lg text-[#000] mx-1">
          Best Channel on youtube
        </h2>
        <h3 className="font-medium text-base text[#555] mx-1">Asim</h3>
        <p>150M views &bull; 2 days ago</p>
      </div>
      <div>
        <img src={thumbnail1} alt="thumbnail" className="rounded-lg" />
        <h2 className="font-semibold text-lg text-[#000] mx-1">
          Best Channel on youtube
        </h2>
        <h3 className="font-medium text-base text[#555] mx-1">Asim</h3>
        <p>150M views &bull; 2 days ago</p>
      </div>
      <div>
        <img src={thumbnail1} alt="thumbnail" className="rounded-lg" />
        <h2 className="font-semibold text-lg text-[#000] mx-1">
          Best Channel on youtube
        </h2>
        <h3 className="font-medium text-base text[#555] mx-1">Asim</h3>
        <p className="mx-1 font-normal text-sm">150M views &bull; 2 days ago</p>
      </div>
      <div>
        <img src={thumbnail1} alt="thumbnail" className="rounded-lg" />
        <h2 className="font-semibold text-lg text-[#000] mx-1">
          Best Channel on youtube
        </h2>
        <h3 className="font-medium text-base text[#555] mx-1">Asim</h3>
        <p>150M views &bull; 2 days ago</p>
      </div>
      <div>
        <img src={thumbnail1} alt="thumbnail" className="rounded-lg" />
        <h2 className="font-semibold text-lg text-[#000] mx-1">
          Best Channel on youtube
        </h2>
        <h3 className="font-medium text-base text[#555] mx-1">Asim</h3>
        <p>150M views &bull; 2 days ago</p>
      </div>
      <div>
        <img src={thumbnail1} alt="thumbnail" className="rounded-lg" />
        <h2 className="font-semibold text-lg text-[#000] mx-1">
          Best Channel on youtube
        </h2>
        <h3 className="font-medium text-base text[#555] mx-1">Asim</h3>
        <p>150M views &bull; 2 days ago</p>
      </div>
      <div>
        <img src={thumbnail1} alt="thumbnail" className="rounded-lg" />
        <h2 className="font-semibold text-lg text-[#000] mx-1">
          Best Channel on youtube
        </h2>
        <h3 className="font-medium text-base text[#555] mx-1">Asim</h3>
        <p className="mx-1 font-normal text-sm">150M views &bull; 2 days ago</p>
      </div>
    </div>
  );
};

export default Feed;
