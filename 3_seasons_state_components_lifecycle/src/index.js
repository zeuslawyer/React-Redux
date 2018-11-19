import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from './loader'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null, errMessage:null };
    this.getLocation();
  }

  componentDidMount(){
    console.log('component did mount! \n', this.state)
    // this.getLocation();
  }
  componentDidUpdate(){
    console.log('component did update! \n', this.state)
  }

  render() {
    if(this.state.latitude && !this.state.errMessage) {
      return (
        <div className="segment ui"> Latitude: {this.state.latitude} </div>
      ) 
    }
    if (this.state.errMessage && !this.state.latitude ) {
      return  <div className="segment ui"> Error: {this.state.errMessage} </div>
    }
    
    return (
      <div className="center"> <Loader /></div> 
    );
  }

  getLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // console.log(position.coords.latitude.toString().slice(1,10));
        this.setState({ latitude: position.coords.latitude });
      },
      err => {
        this.setState({errMessage: err.message})
        console.log('State : ', this.state.errMessage);
      }
    );
  };
}


export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
