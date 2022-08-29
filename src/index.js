import React from 'react'
import ReactDOM from 'react-dom'

const Greeting = () => {
  return React.createElement("h1", {}, 'Hello World');
}

ReactDOM.render(<Greeting />, document.getElementById('root'))