import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" placeholder="Enter search text here" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
