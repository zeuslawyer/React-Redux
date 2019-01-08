import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./loader";
import getLocation from "./getLocation";

const App = () => {
  // get data using re-used hook component...
  let [latitude, errMessage] = getLocation();

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

  // render the JSX to be displayed
  return <div className="border red">{displayContent}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
