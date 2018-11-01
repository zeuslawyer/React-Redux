import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

// importing components
import SearchBar from "./components/Search-bar";
import VideoList from "./components/Video-list";
import VideoDetail from "./components/Video-detail";


const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    //initialise state
    this.state = {
      videos: [],
      selectedVideo: null
    };
    //set initial load state using the handler method
    this.onVideoSearch('react tutorials')
  }

  // handler methods - are defined outside constructors
  onVideoSearch(searchTerm) {
    //search YT, retrieve videos, set state with videos array, choose initial video detail from index 0
    YTSearch({ key: API_KEY, term: searchTerm }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo : videos[0]
       }); 
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={(searchTerm) => this.onVideoSearch(searchTerm)} />
        {/* <SearchBar onSearchTermChange={this.onVideoSearch(searchTerm)} /> */}
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
        videos = {this.state.videos}
        onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})}  // func takes the clicked video as argument
         />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
// ReactDOM.render(<App />, document.getElementsByClassName('container')[0])
