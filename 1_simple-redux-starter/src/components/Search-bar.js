import React, { Component } from "react";

// Class component, not Functional Component
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    //method biding in constructor method - USED IN METHOD 2
    // this.onInputChange = this.onInputChange.bind(this);
  }

  // handler functions
  onInputChange(searchTerm) {
    this.setState({ searchTerm });
    this.props.onSearchTermChange(searchTerm);
  }

  render() {
    // method 2 - directly passing event handler to onChange property of the component
    return (
      <div className="search-bar">
        <input
          value={this.state.searchTerm}
          onChange={(event) => {
            this.onInputChange(event.target.value);
          }}
        />
        Input Value is: {this.state.searchTerm}
      </div>
    );
  }
}

export default SearchBar;
