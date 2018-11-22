import React, { Component } from "react";
import SearchBar from "./SearchBar";

const componentStyle = { marginTop: "10px" };

class App extends Component {

  onSearchSubmit = (term) => {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={componentStyle}>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
