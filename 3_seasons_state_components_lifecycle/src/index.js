import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {latitude: "fetching..."};
  }

  render() {
    console.log("STATE! ", this.state.latitude);
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // console.log(position.coords.latitude.toString().slice(1,10));
        this.setState({
          latitude: position.coords.latitude
        })
      },
      err => console.log("ERROR in GEOLOCATION!  > > " + err.message)
    );

    return <div className="segment ui">Latitude: {this.state.latitude.toString().slice(1,10)} </div>;
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
// const App = () => {

// };
