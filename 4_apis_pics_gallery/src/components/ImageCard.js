import React, { Component } from "react";

class ImageCard extends Component {
  

  render() {
    let {url, desc} = this.props  
    return (
        // <div></div>
      <div >
        <img src={url} alt={desc} />
      </div>
    );
  }
}

export default ImageCard;
