// import React from 'react'


// const SearchBar = () => {
//     return <input />
// };

import React, { Component } from 'react'

// Class component, not Functional Component
class SearchBar extends Component {
  render() {
    return  <input onChange={this.onInputChange}/>
  }

  onInputChange(event){
    console.log(event.target.value)
  }
  
};


export default SearchBar;