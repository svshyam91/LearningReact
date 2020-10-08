import React from "react";
import "./App.css";

// Form with multiple elements with common handler

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      age: "",
      pass: "",
      comment: "",
      favColor: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler(event) {
    alert("User's Fav. Color: " + this.state.favColor);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.changeHandler}
            />
          </label>
          <br />

          <label>
            Age:
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.changeHandler}
            />
          </label>
          <br />

          <label>
            Password:
            <input
              type="password"
              name="pass"
              value={this.state.pass}
              onChange={this.changeHandler}
            />
          </label>
          <br />

          <label>
            Select your favourite Color:
            <select
              name="favColor"
              value={this.state.favColor}
              onChange={this.changeHandler}
            >
              <option>Red</option>
              <option>Green</option>
              <option>Blue</option>
              <option>White</option>
              <option>Black</option>
              <option>Indigo</option>
            </select>
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default App;
