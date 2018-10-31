import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

// importing components
import SearchBar from "./components/Search-bar";
import VideoList from "./components/Video-list";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    //initialise state
    this.state = {
      videos: []
    };
    //set state
    YTSearch({ key: API_KEY, term: "Gary Vee" }, videos => {
      this.setState({ videos }); //ES6 syntax for where object is {videos : videos}
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        {/* pass fetched videos array as a prop */}
        <VideoList videos = {this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
// ReactDOM.render(<App />, document.getElementsByClassName('container')[0])
