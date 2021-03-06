import React, { Component } from "react";


class SearchBar extends Component {
  state = { searchTerm: "" };

  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form" 
          onSubmit={event => {
            event.preventDefault();
            this.props.onFormSubmit(this.state.searchTerm);
          }}
        >
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              placeholder="Enter search text here"
              onChange={event => {
                this.setState({ searchTerm: event.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
