import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./loader";

const App = () => {
  // set up use State
  const [latitude, setLatitude] = useState(null);
  const [errMessage, setErrMessage] = useState("");

  //set up use Effect for a one time action to get user loc
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
      },
      err => setErrMessage(err.message)
    );
  }, []);

  // set up content to display
  let displayContent;
  if (errMessage) {
    displayContent = <div className="segment ui"> Error: {errMessage} </div>;
  } else if (latitude) {
    displayContent = (
      <div className="">
        <SeasonDisplay latitude={latitude} />
      </div>
    );
  } else {
    displayContent = (
      <Loader
        message="Waiting for you to confirm your location!"
        type="cylon"
        color="#ff0000"
      />
    );
  }

  //return / render the JSX to be displayed
  return <div className="border red">{displayContent}</div>;
};

// class App extends Component {
//   state = { latitude: null, errMessage: null };
//   getLocation = () => {
//     window.navigator.geolocation.getCurrentPosition(
//       position => this.setState({ latitude: position.coords.latitude }),
//       err => this.setState({ errMessage: err.message })
//     );
//   };

//   componentDidMount() {
//     this.getLocation();
//     console.log("<App /> component did mount! State Object is: \n", this.state);
//   }

//   componentDidUpdate() {
//     console.log(
//       " <App />  component did update! State Object is: \n",
//       this.state
//     );
//   }

//   renderContent() {
//     if (this.state.latitude && !this.state.errMessage) {
//       return (
//         <div className="">
//           <SeasonDisplay latitude={this.state.latitude} />{" "}
//         </div>
//       );
//     }

//     if (this.state.errMessage && !this.state.latitude) {
//       return <div className="segment ui"> Error: {this.state.errMessage} </div>;
//     }

//     return (
//       <div className="">
//         <Loader
//           message="Waiting for you to confirm your location!"
//           type="cylon"
//           color="#ff0000"
//         />
//       </div>
//     );
//   }

//   render() {
//     return <div className="border red">{this.renderContent()}</div>;
//   }
// }

ReactDOM.render(<App />, document.querySelector("#root"));
