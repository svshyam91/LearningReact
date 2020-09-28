import React from 'react'
import ReactDOM from 'react-dom'


class Person extends React.Component {
  render() {
    return(
      <div>
        <p>My name is {this.props.name} and my age is {this.props.age}</p>
      </div>
    )
  }
}

ReactDOM.render(<Person name="Shyam" age="23" />, document.getElementById('root'));