import React from 'react'
import VideoListItem from './Video-list-item'

const VideoList = ({videos, onVideoSelect}) => {
    
  //get array of VideoListItem Components from props using MAP function
  const videoItems = videos.map((video)=>{
      //pass each video object as a prop into the VideoListItem Component
      // map function returns a list of VideoListItem components
    return (
      <VideoListItem 
        key={video.etag} 
        video={video}
        onVideoSelect = {onVideoSelect}
        />
    ) 
  
  })

  //return component that is a list of videos, to be rendered
    return (
    <div>
      <ul className='col-md-10 list-group' >
          {videoItems}
      </ul>
    </div>
  )


}

export default VideoList;
