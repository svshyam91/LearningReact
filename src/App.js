import React from "react";
import "./App.css";

// Form using Select tag 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favColor: '',
    }
    this.favColorHandler = this.favColorHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  favColorHandler(event) {
    this.setState({favColor: event.target.value});
  }

  submitHandler(event) {
    alert('User\'s Fav. Color: '+this.state.favColor);
    event.preventDefault();
  }

  render() {
   return(
    <div>
      <form onSubmit={this.submitHandler}>
        <label>
          Select your favourite Color:
          <select value={this.state.favColor} onChange={this.favColorHandler}>
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
            <option>White</option>
            <option>Black</option>
            <option>Indigo</option>
          </select>
        </label>
        <input type='submit' value='submit' />
      </form>
    </div>
   )
  }
}

export default App;