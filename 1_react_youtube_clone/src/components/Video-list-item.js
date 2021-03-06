import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  //method 2: the video property from props that gets received is deconstructed to a const with the same name
  // console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <li
      className="list-group-item"
      // click handler: callback function which calls onVideoSelect
      onClick={elem => onVideoSelect(video)}
    >
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
