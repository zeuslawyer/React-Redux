import React from "react";

const ImageList = props => {
  const componentStyle = { width: "30em", height: "30em" };

  const images = props.images.map(image => (
      <div key={image.id}>
        <img src={image.urls.regular} alt={image.description} style={componentStyle} />
      </div>
  ));

  return (
    <div className="container ui">
      {images}
    </div>
  );
};

export default ImageList;
