import React from 'react'
import ReactDOM from 'react-dom'


class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'hobbies': ['programming', 'cricket']
    }
  }
  render() {
    return(
      <div>
        <p>My name is {this.props.name} and my age is {this.props.age}</p>
        <p>Hobbies: {this.state.hobbies[0]} and {this.state.hobbies[1]}</p>
      </div>
    )
  }
}

ReactDOM.render(<Person name="Shyam" age="23" />, document.getElementById('root'));