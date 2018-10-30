import React from 'react'

const VideoList = (props) => {
  return (
    <div>
      <ul>
          {props.videos.length}
      </ul>
    </div>
  )
}

export default VideoList;
