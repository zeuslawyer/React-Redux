import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = props => {
  //map the array of images to create an array of JSX elements
  const images = props.images.map(image => {
    return <ImageCard className="image-card" key={image.id} image={image} />;
  });

  // render the array of JSX elements
  return <div className="image-list">{images}</div>;
};

export default ImageList;
