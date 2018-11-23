import React, { Component } from "react";

class ImageCard extends Component {
  render() {
    let { urls, description } = this.props.image;

    return (
      <div>
        <img src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
