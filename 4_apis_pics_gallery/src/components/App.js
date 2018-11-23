import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

import unsplash from "../api/unsplash";

const componentStyle = { marginTop: "10px" };

class App extends Component {
  state = { images: [] };

  handleResponse = response => {
    this.setState({ images: response.data.results });
  };

  onSearchSubmit = searchTerm => {
    unsplash
      .get("/search/photos", {
        params: { query: searchTerm }
      })
      .then(this.handleResponse)
      .catch(e => console.log(e.message));
  };

  render() {
    return (
      <div className="ui container" style={componentStyle}>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <div>There are {this.state.images.length} images available...</div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
