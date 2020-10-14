import React from "react";
import "./App.css";

// Form using Bootstrap with simple validation 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favColors: ['red', 'green', 'blue', 'white', 'black', 'indigo'],
      fields: {
        username: '',
        age: '',
        password: '',
        favColor: ''
      },
      errors: {
        username: '',
        age: '',
        password: '',
        favColor: ''
      }
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }


  validationHandler() {
    let fields = this.state.fields;
    let errors = {
      username: '',
      age: '',
      password: '',
      favColor: ''
    };
    let formIsValid = true;

    //Username
    if(fields.username === '') {
      formIsValid = false;
      console.log('This is true')
      errors.username = 'Username cannot be empty.'; 
    }
    else if(typeof fields.username !== 'undefined') {
      if(!fields.username.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors.username = 'Username should only contain letters.';
      }
    }

    // Age
    if(fields.age === '') {
      formIsValid = false;
      errors.age = 'Age cannot be empty';
    }
    else if(typeof fields.age !== 'undefined') {
      if(!fields.age.match(/^[0-9].{0,2}$/)) {
        formIsValid = false;
        errors.age = 'Age must be between 0 and 99';
      }
    }

    //Password
    if(fields.password === '') {
      formIsValid = false;
      errors.password = 'Password cannot be empty';
    }
    else if(typeof fields.password !== 'undefined') {
      if(!fields.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/)) {
        /* Regular expression description: 
          Password must be at least 4 characters, no more than 8 characters, 
          and must include at least one upper case letter, one lower case letter, 
          and one numeric digit. */

        formIsValid = false;
        errors.password = 'Password must be at least 4 characters, no more than 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.';
      }
    }

    // Favourite Color
    if(fields.favColor === '') {
      formIsValid = false;
      errors.favColor = 'Please select your favourite color';
    }
    else if(typeof fields.favColor !== 'undefined') {
      if(!this.state.favColors.includes(fields.favColor)) {
        formIsValid = false;
        errors.favColor = 'Invalid value of Color';
      }
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  changeHandler(event) {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({fields: fields});
  }

  submitHandler(event) {
    event.preventDefault();
    if(this.validationHandler()) {
      alert("Your form is successfully uploaded.");
    } 
  }

  render() {
    return (
      <div>
        <h2 className="h2">Sign Up Form</h2>
        <form onSubmit={this.submitHandler}>

          <div className="form-group">
            <label htmlFor="username">Username:</label>
              <input className="form-control"
                type="text"
                name="username"
                id="username"
                value={this.state.fields.username}
                onChange={this.changeHandler}
              />
          </div>
          <small className="small">{this.state.errors.username}</small>

          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={this.state.fields.age}
              onChange={this.changeHandler}
            />
          </div>
          <small>{this.state.errors.age}</small>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.fields.password}
              onChange={this.changeHandler}
            />
          </div>
          <small>{this.state.errors.password}</small>

          <div className="form-group">
            <label htmlFor="favColor">Favourite Color:</label>
            <select
              name="favColor"
              className="form-control"
              value={this.state.fields.favColor}
              onChange={this.changeHandler}
            >
              {this.state.favColors.map((value,index) => {
                return <option key={index} value={value}>{value}</option>
              })}

            </select>
          </div>
          <small>{this.state.errors.favColor}</small>
          <input type="submit" className="btn btn-block btn-primary" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
