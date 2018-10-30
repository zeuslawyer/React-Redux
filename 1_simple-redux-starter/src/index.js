import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

// importing components
import SearchBar from "./components/Search-bar";

const API_KEY = process.env.REACT_APP_API_KEY

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       videos: []
    }

    YTSearch({ key: API_KEY, term: "Oprah" }, (videos) => {
      console.log(videos);
      this.setState({videos})   //ES6 syntax for where object is {videos : videos}
    });

  }
  
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector(".container"));
// ReactDOM.render(<App />, document.getElementsByClassName('container')[0])
