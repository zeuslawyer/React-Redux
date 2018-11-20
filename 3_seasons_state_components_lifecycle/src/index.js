import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./loader";

class App extends Component {
  state = { latitude: null, errMessage: null };

  componentDidMount() {
    this.getLocation();
    console.log("component did mount! State Object is: \n", this.state);
  }
  componentDidUpdate() {
    console.log("component did update!State Object is: \n", this.state);
  }

  render() {
    if (this.state.latitude && !this.state.errMessage) {
      return (
        <div className="segment ui">
          {" "}
          <SeasonDisplay latitude={this.state.latitude} />{" "}
        </div>
      );
    }
    if (this.state.errMessage && !this.state.latitude) {
      return <div className="segment ui"> Error: {this.state.errMessage} </div>;
    }

    return (
      <div className="center">
        <Loader />
      </div>
    );
  }

  getLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  };
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
