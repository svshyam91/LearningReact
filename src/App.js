import React from "react";
import "./App.css";

// This program uses map() to print list

class Family extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {name: 'Shyam', yearOfBirth: 1997, gender: 'male'},
        {name: 'Vishwanath', yearOfBirth: 1952, gender: 'male'},
        {name: 'Indrawati', yearOfBirth: 1960, gender: 'female'},
        {name: 'Suneel', yearOfBirth: 1993, gender: 'male'}
      ]
    }
  }

  calculateAge(yearOfBirth) {
    return  2020-yearOfBirth;
  }

  render() {
    const persons = this.state.persons.map((person) => {
        return(<div className='person'>
          <div>Name: {person.name}</div>
          <div>year Of Birth: {person.yearOfBirth}</div>
          <div>Gender: {person.gender}</div>
          <div>Age: {this.calculateAge(person.yearOfBirth)}</div><br></br><br></br>
        </div>)
    });

    return(
      <div>
        {persons}
      </div>
    )
  }
}

export default Family;
