import React from 'react'

const VideoListItem = (props) => {
  return <li> Description: {props.video.snippet.description} </li>
  
}


export default VideoListItem;