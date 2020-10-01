import React from "react";
import "./App.css";

// This program demostrate conditional rendering 

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      yearOfBirth: props.yearOfBirth,
      gender: props.gender,
    }
  }

  calculateAge() {
    return 2020-this.state.yearOfBirth;
  }

  render() {
    return(
      <div className='person'>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.calculateAge()}</p>
        <p>Gender: {this.state.gender}</p>
      </div>
    )
  }
}

class Family extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      togglePerson: false
    }
  }
  togglePersonHandler() {
    this.setState({togglePerson: !this.state.togglePerson})
  }
  render() {
    return(
      <div>
        <button onClick={this.togglePersonHandler.bind(this)}>Show/Hide</button> 
        { this.state.togglePerson ? 
          <div>
            <Person name="Shyam" yearOfBirth="1997" gender="male" />
            <Person name="Vishwanath" yearOfBirth="1952" gender="male" />
            <Person name="Indrawati" yearOfBirth="1960" gender="female" />
            <Person name="Suneel" yearOfBirth="1993" gender="male" />
          </div>
         : null
        }
      </div>
    )
  }
}

export default Family;