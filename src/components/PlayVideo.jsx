import React, { useEffect, useState } from "react";
import { like, dislike, share, save, profile, user_profile } from "../assets";
import { API_KEY, valueConverter } from "..";
import axios from "axios";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const { videoId } = useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      )
      .then((res) => {
        const videodata = res.data;
        setApiData(videodata.items[0]);
      });
  }, [videoId]);

  const fetchChannel = async () => {
    let channelApi = await axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
      )
      .then((res) => {
        const channelitems = res.data;
        setChannelData(channelitems.items[0]);
      });
    return channelApi;
  };

  useEffect(() => {
    fetchChannel();
  }, [apiData]);

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=500&videoId=${videoId}&key=${API_KEY}`
      )
      .then((res) => {
        const comment = res.data;
        setCommentData(comment.items);
      });
  }, []);

  return (
    <div className="basis-2/3 ml-[20px] mt-[80px]">
      <iframe
        className="w-full h-[37vw]"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3 className="mt-3 font-semibold text-2xl">
        {apiData ? apiData.snippet.title : "Title"}
      </h3>
      <div className="flex items-center justify-between flex-wrap mt-3 text-sm text-[#5a5a5a]">
        <p>
          {apiData ? valueConverter(apiData.statistics.viewCount) : "No "} views
          &bull;
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div className="flex items-center">
          <span className="flex items-center ml-4">
            <img src={like} alt="like" className="h-8 w-8" />
            {apiData ? valueConverter(apiData.statistics.likeCount) : "Like"}
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
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt="Asim"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <p className="font-semibold text-black text-[18px]">
            {apiData ? apiData.snippet.channelTitle : "Asim"}
          </p>
          <span className="text-xs">
            {channelData
              ? valueConverter(channelData.statistics.subscriberCount)
              : ""}{" "}
            Subscribers
          </span>
        </div>
        <button className="mt-1 h-8 ml-3 font-semibold text-white bg-black border rounded-3xl px-2 pb-px">
          Subscribe
        </button>
      </div>
      <div className="pl-9 mx-4 mt-3">
        <p className="text-base">
          {apiData ? apiData.snippet.description : ""}
        </p>
        <p className="mt-1">subscribe for more</p>
        <hr className="my-2" />
        <h4 className="font-semibold text-lg">
          {apiData ? valueConverter(apiData.statistics.commentCount) : "No "}{" "}
          comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt="user"
                className="w-8 h-8 rounded-full m-2"
              />
              <div>
                <div className="flex">
                  <h3 className="font-medium">
                    {item.snippet.topLevelComment.snippet.authorDisplayName}
                  </h3>
                  <span className="text-xs mt-1 ml-1">1 day ago</span>
                </div>
                <p className="text-sm mt-1 mb-2">
                  {item.snippet.topLevelComment.snippet.textOriginal}
                </p>
                <div className="flex">
                  <img src={like} alt="like" className="w-6 h-6 mr-1" />
                  <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                  <img src={dislike} alt="dislike" className="w-6 h-6 ml-3" />
                  <span></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
