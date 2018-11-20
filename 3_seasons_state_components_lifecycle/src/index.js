import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./loader";

class App extends Component {
  state = { latitude: null, errMessage: null };

  getLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  };

  componentDidMount() {
    this.getLocation();
    console.log("<App /> component did mount! State Object is: \n", this.state);
  }

  componentDidUpdate() {
    console.log(
      " <App />  component did update! State Object is: \n",
      this.state
    );
  }

  renderContent() {
    if (this.state.latitude && !this.state.errMessage) {
      return (
        <div className="">
          <SeasonDisplay latitude={this.state.latitude} />{" "}
        </div>
      );
    }

    if (this.state.errMessage && !this.state.latitude) {
      return <div className="segment ui"> Error: {this.state.errMessage} </div>;
    }

    return (
      <div className="">
        <Loader
          message="Waiting for you to confirm your location!"
          type="cylon"
          color="#ff0000"
        />
      </div>
    );
  }

  render() {
    return (
      <div className="some enclosing div common to all">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
