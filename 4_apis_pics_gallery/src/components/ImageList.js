import React from "react";

const ImageList = props => {
  const componentStyle = { width: "80%" };
  const images = props.images.map(image => {
    return (
      <div key={image.id} >
        <img src={image.urls.regular} alt=""  />;
      </div>
    );
  });

  return (
    <div className="container ui" style={componentStyle}>
      {images}
    </div>
  );
};

export default ImageList;
