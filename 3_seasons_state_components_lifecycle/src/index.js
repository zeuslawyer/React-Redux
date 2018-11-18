import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="segment ui">
      Hello!
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.querySelector('#root'))
