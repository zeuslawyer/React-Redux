import React from 'react'
import ReactDOM from 'react-dom'

const App =  () => {
    return <div> Hi there!</div> ;
}


ReactDOM.render(<App />, document.querySelector('.container'))
// ReactDOM.render(<App />, document.getElementsByClassName('container')[0])