import React from "react";
import VideoDetail from "./Video-detail";

const VideoListItem = ({video}) => {    //method 2: the video property from props that gets received is deconstructed to a const with the same name
  console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" alt="" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading"> {title} </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
