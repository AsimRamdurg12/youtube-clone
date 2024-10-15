import { useEffect, useState } from "react";
import { API_KEY, valueConverter } from "..";
import axios from "axios";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [recommendApiData, setRecommendApiData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
      )
      .then((res) => {
        const recommend = res.data;
        setRecommendApiData(recommend.items);
      });
  }, []);

  return (
    <div className="flex-1 mt-[80px] ml-2">
      {recommendApiData.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className="flex justify-center mb-2"
            key={index}
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt="video"
              className="w-1/2"
            />
            <div>
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{valueConverter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
