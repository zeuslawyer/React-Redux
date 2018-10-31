import React from 'react'
import VideoListItem from './Video-list-item'

const VideoList = (props) => {
    //get list of videos from props
  const videoItems = props.videos.map((video)=>{
      //pass each video object as a prop into the VideoListItem Component
    return <VideoListItem video={video}/>
  })

  //return component that is a list of videos, to be rendered
    return (
    <div>
      <ul className='col-md-4 list-group' >
          {videoItems}
      </ul>
    </div>
  )
}

export default VideoList;
