import React from "react";

const VideoListItem = props => {
  console.log(props.video);
  const imageUrl = props.video.snippet.thumbnails.default.url;
  const title = props.video.snippet.title;

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
