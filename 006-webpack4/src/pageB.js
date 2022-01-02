import React from 'react'
import ReactDOM from 'react-dom'

const div = document.createElement('div')
div.id = 'pageB'
document.body.appendChild(div)

class HelloMessage extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name
    );
  }
}

ReactDOM.render(
  React.createElement(
    HelloMessage,
    { name: "pageB" }
  ),
  document.getElementById('pageB')
);