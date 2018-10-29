import React, { Component } from 'react'

// Class component, not Functional Component
class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         searchTerm: ''
      }

      this.onInputChange = this.onInputChange.bind(this)
    }
  
  render() {
    return  <input onChange={this.onInputChange}/>
  }

  onInputChange(event){
    event.preventDefault()
    this.setState({searchTerm: event.target.value})
    console.log('state :', this.state);
  }

};


export default SearchBar;

