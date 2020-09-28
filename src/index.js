import React from 'react'
import ReactDOM from 'react-dom'


class Person extends React.Component {
  constructor(props) {
    super();
    this.state = {
      color: "red"
    }
  }

  changeColor = () => {
    this.setState({color: "yellow"})
  }
  
  static getDerivedStateFromProps = (props, state) => {
    // this.setState({color: "yellow"});
    // 'this' inside static function will not work because static functions are not associate with any instance of class
    return {color: "blue"}
  }

  render() {
    return(
      <div style = {{color: this.state.color }}>
        <p>My name is {this.props.name}</p>
        <p>My age is {this.props.age} </p>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    )
  }
}

ReactDOM.render(<Person name="Shyam" age="23" />, document.getElementById('root'));