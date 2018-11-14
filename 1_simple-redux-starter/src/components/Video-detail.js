import React from "react";

const VideoDetail = ({ video }) => {
  // handle null props where API fetch has not completed... return statement means the lines below that wont run
  if (!video) {
    return <div> LOADING...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title={video.id} className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>title: {video.snippet.title}</div>
        <div>description: {video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
