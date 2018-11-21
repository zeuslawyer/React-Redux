import React, { Component } from "react";

class SearchBar extends Component {
  state = { searchTerm: "" };

  constructor() {
    super();
    this.hitMeUp = this.hitMeUp.bind(this);
  }

  hitMeUp(event) {
    console.log(this);
    this.setState({ searchTerm: event.target.value })
  }
  onFormSubmit(event) {
    event.preventDefault();
    console.log(this);
  }
  render() {
    console.log(this.state.searchTerm);

    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              placeholder="Enter search text here"
              //   onChange={event => {
              //     this.setState({ searchTerm: event.target.value });
              //   }}
              onChange={this.hitMeUp}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
