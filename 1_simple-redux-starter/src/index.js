import React from "react";
import ReactDOM from "react-dom";

// importing components
import SearchBar from './components/Search-bar';

const API_KEY = process.env.REACT_APP_YT_API;


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector(".container"));
// ReactDOM.render(<App />, document.getElementsByClassName('container')[0])
