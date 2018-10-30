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

  render() {
    //method 1 - using the onInputChange() method
    // return (
    //     <div>
    //         <input onKeyDown={this.onInputChange} />
    //         Input Value is: {this.state.searchTerm}
    //     </div>
    // )

    // method 2 - directly passing event handler to onChange property of the component
    return (
      <div>
        <input
          value={this.state.searchTerm}
          onChange={event => this.setState({ searchTerm: event.target.value })}
        />
        <br />Input Value is: {this.state.searchTerm}
      </div>
    );
  }

  //NOT USED IN METHOD 2
  //   onInputChange(event) {
  //     event.preventDefault();
  //     this.setState({ searchTerm: event.target.value});
  //     console.log("state :", this.state);
  //   }
}

export default SearchBar;
