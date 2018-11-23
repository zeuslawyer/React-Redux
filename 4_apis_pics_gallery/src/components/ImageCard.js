import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { span: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(
      this.imageRef.current.height === this.imageRef.current.clientHeight
    );

    //listen for the imageRef.current object to full load, then calculate spans using callback
    this.imageRef.current.addEventListener("load", this.setImageSpans);
  }

  setImageSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const gridRowHeight = 10; //taken from the ImageList css grid-auto-rows rule
    const span = Math.ceil(height / 10);
    this.setState({ span });
  };

  componentDidUpdate() {
    // console.log("image card state re set and re rendered");
  }

  render() {
    const { urls, description } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span $(this.state.span)` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
