import React from 'react'
import ReactDOM from 'react-dom'

// Clock using props
class Clock extends React.Component {
  render() {
    return(
      <div>
        <p>Current Time: {this.props.date.getDate()}-{this.props.date.getMonth()}-{this.props.date.getFullYear()} {this.props.date.getHours()}:
        {this.props.date.getMinutes()}:{this.props.date.getSeconds()}</p>
      </div>
    )
  }
} 

const updateTime = () => {
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'));
}

setInterval(() => {
  updateTime();
}, 1000);