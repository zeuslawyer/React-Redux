import React from "react";
import ImageCard from './ImageCard';
import './ImageList.css'

const ImageList = props => {

  // const images = props.images.map(image => (
      
  //     <ImageCard key={image.id} url={image.urls.regular} desc={image.description}/>

  // ));

  const images = props.images.map(({id, urls, description}) => (
      
      <ImageCard key={id} url={urls.regular} desc={description}/>

  ));

  return (
    <div className="image-list">
      {images}
    </div>
  );
};

export default ImageList;
