import React, { Component } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

const componentStyle = { marginTop: "10px" };

class App extends Component {
  handleResponse = (response) =>{
    console.group(response.data.results)
  }
  onSearchSubmit = term => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization: "Client-ID " + process.env.REACT_APP_UNSPLASH_ACCESS
        }
      })
      // .then(d => console.log(d.data.results[1].urls.regular))
      .then(this.handleResponse)
      .catch(e => console.log(e.message));
  };

  render() {
    return (
      <div className="ui container" style={componentStyle}>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
