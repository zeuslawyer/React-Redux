import React, { Component } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

const componentStyle = { marginTop: "10px" };

class App extends Component {
  state = { images: [] };
  handleResponse = response => {
    console.log('handling response....');
    this.setState({ images: response.data.results });
  };
  onSearchSubmit = term => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization: "Client-ID " + process.env.REACT_APP_UNSPLASH_ACCESS
        }
      })
      .then(this.handleResponse)
      .catch(e => console.log(e.message));
  };

  render() {
    console.log('Number of images in array....', this.state.images.length);
    if (this.state.images.length > 0) {
      return (
        <div>There are {this.state.images.length} images available...</div>
      )
    }

    return (
      <div className="ui container" style={componentStyle}>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
