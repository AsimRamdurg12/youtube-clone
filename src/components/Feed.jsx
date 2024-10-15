import React, { useEffect, useState } from "react";
import { thumbnail1 } from "../assets";
import { Link } from "react-router-dom";
import { API_KEY, valueConverter } from "..";
import axios from "axios";
import moment from "moment";

const Feed = ({ category }) => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=500&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
      )
      .then((res) => {
        const person = res.data;
        setFetchData(person.items);
      });
  }, [category]);

  return (
    <div className="grid grid-cols-4 gap-2 mt-[80px] mx-2">
      {fetchData.map((item, index) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index}>
          <img
            src={item.snippet.thumbnails.medium.url}
            alt="thumbnail"
            className="rounded-lg "
          />
          <h2 className=" font-semibold text-lg text-[#000] mx-1">
            {item.snippet.title}
          </h2>
          <h3 className="font-medium text-base text[#555] mx-1">
            {item.snippet.channelTitle}
          </h3>
          <p>
            {valueConverter(item.statistics.viewCount)} views &bull;
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
