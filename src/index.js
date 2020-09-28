import React from 'react'
import ReactDOM from 'react-dom'


class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'hobbies': "Programming, Cricket",
    }
  }

  addHobbies = () => {
    this.setState(
      {'hobbies': 'Programming, Cricket, Music'}
    )
  }

  render() {
    return(
      <div>
        <p>My name is {this.props.name} and my age is {this.props.age}</p>
        <p>Hobbies: {this.state.hobbies}</p>
        <button onClick={this.addHobbies}>Other Hobbies</button>
      </div>
    )
  }
}

ReactDOM.render(<Person name="Shyam" age="23" />, document.getElementById('root'));