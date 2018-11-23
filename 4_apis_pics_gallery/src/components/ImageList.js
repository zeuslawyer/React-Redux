import React from "react";
import './ImageList.css'

const ImageList = props => {

  const images = props.images.map(image => (
      <div key={image.id}>
        <img src={image.urls.regular} alt={image.description} />
      </div>
  ));

  return (
    <div className="image-list">
      {images}
    </div>
  );
};

export default ImageList;
