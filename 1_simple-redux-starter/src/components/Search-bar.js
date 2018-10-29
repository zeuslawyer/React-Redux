import React, { Component } from "react";

// Class component, not Functional Component
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };

    //method biding in constructor method
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
      //method 1 - using the onInputChange() method
    // return <input onChange={this.onInputChange} />;
    
    //method 2 - directly passing event handler to onChange property of the component
    return <input onChange={event => {this.setState({searchTerm:event.target.value})}} />;
  }

  onInputChange(event) {
    event.preventDefault();
    this.setState({ searchTerm: event.target.value });
    console.log("state :", this.state);
  }
}

export default SearchBar;

