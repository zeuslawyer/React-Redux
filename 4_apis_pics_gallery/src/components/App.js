import React, { Component } from "react";
import unsplash from "../api/unsplash";

import SearchBar from "./SearchBar";

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
    if (this.state.images.length > 0) {
      return (
        <div>There are {this.state.images.length} images available...</div>
      );
    }

    return (
      <div className="ui container" style={componentStyle}>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
