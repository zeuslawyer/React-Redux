import React from 'react'
import ReactDOM from 'react-dom'
import dotenv from 'dotenv'

const App =  () => {
    return <div> Hi there!</div> ;
}


ReactDOM.render(<App />, document.querySelector('.container'))
// ReactDOM.render(<App />, document.getElementsByClassName('container')[0])