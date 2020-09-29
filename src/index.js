import React from 'react'
import ReactDOM from 'react-dom'

// Clock using props
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    this.timerID = setInterval(()=>{
      this.setState({date: new Date()})
    },1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return(
      <div>
        <p>Current Time: {this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
} 

ReactDOM.render(<Clock />, document.getElementById('root'));
