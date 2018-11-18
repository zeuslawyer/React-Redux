import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import getLocation from './getLocation'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null };
    this.getLocation(this);
    // console.log(this);
  }
  
  getLocation = getLocation;
  // getLocation = () => {
  //   window.navigator.geolocation.getCurrentPosition(
  //     position => {
  //       // console.log(position.coords.latitude.toString().slice(1,10));
  //       this.setState({ latitude: position.coords.latitude });
  //     },

  //     err => console.log("ERROR in GEOLOCATION!  > > " + err.message)
  //   );
  // };

  render() {
    
    return <div className="segment ui"> Latitude: {this.state.latitude} </div>;
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
