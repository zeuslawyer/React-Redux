import React from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';
import {secrets} from './secrets'
// importing components
import SearchBar from './components/Search-bar';



const API_KEY = secrets.YOUTUBE_API

YTSearch({key: API_KEY, term: 'evan carmichael'}, function(results){
  console.log(results)
  console.log(results[0].id.kind.slice(-6))
});

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector(".container"));
// ReactDOM.render(<App />, document.getElementsByClassName('container')[0])
