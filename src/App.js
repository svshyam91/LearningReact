import React from "react";
import "./App.css";

// Form using Bootstrap with simple validation 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      age: "",
      pass: "",
      favColor: "",
      error: false,
      errorMssg: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    // Validate input values
    if(this.state.username === "" || this.state.age === "" || this.state.pass === "" || this.state.favColor === "") {
      this.setState({error: true, errorMssg: "Fill all fields."});
    }
    else {
      alert("Your form is successfully uploaded.");
      this.setState({error:false})
    }
    // alert("User's Fav. Color: " + this.state.favColor);
    
  }

  render() {
    let errorDiv;
    if(this.state.error) {
      errorDiv = (
        <div className="alert alert-primary alert-dismissible">{this.state.errorMssg}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          {errorDiv}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
              <input className="form-control"
                type="text"
                name="username"
                id="username"
                value={this.state.username}
                onChange={this.changeHandler}
              />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={this.state.age}
              onChange={this.changeHandler}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              name="pass"
              value={this.state.pass}
              onChange={this.changeHandler}
            />
          </div>

          <div className="form-group">
            <label htmlFor="favColor">Favourite Color:</label>
            <select
              name="favColor"
              className="form-control"
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
          </div>
          <input type="submit" className="btn btn-block btn-primary" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
