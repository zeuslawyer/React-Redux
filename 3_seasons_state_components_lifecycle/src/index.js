import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from './loader'


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { latitude: null, errMessage:null };
  // }

  state = { latitude: null, errMessage:null };

  componentDidMount(){
    console.log('component did mount! \n', this.state)
    this.getLocation();
  }
  componentDidUpdate(){
    console.log('component did update! \n', this.state)
  }

  render() {
    if(this.state.latitude && !this.state.errMessage) {
      return (
        <div className="segment ui"> <SeasonDisplay latitude={this.state.latitude}/> </div>
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
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({errMessage: err.message})
    );
  };
}


export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
