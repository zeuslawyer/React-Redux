import React from 'react'
import VideoListItem from './Video-list-item'

const VideoList = (props) => {
    //get array of VideoListItem Components from props
  const videoItems = props.videos.map((video, index)=>{
      //pass each video object as a prop into the VideoListItem Component
    return <VideoListItem key={video.etag} video={video}/>
  })

  //return component that is a list of videos, to be rendered
    return (
    <div>
      <ul className='col-md-8 list-group' >
          {videoItems}
      </ul>
    </div>
  )
}

export default VideoList;
