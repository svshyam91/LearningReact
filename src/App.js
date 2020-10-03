import React from "react";
import "./App.css";

// Udemy course Exercise, Learn display dynamic content, passing function reference, two-way binding

class UserInput extends React.Component {
  render() {
    return(
      <div>
        Enter Username: <input name="inputName" onChange={this.props.click} value={this.props.currentUser}></input>
      </div>
    )
  }
}

class UserOutput extends React.Component {
  render() {
    return(
      <div>
        Output:
        <p>My name is {this.props.username}</p>
        <p>I live in Lucknow.</p>
      </div>
    )
  }
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "Shyam",
    }
  }

  changeUsernameHandler = (e) => {
    const username = e.target.value;
    this.setState({username: username});
  }

  render() {
    return(
      <div>
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>

        <UserOutput username={this.state.username}/>
        <UserOutput username="Suneel"/>
        <UserInput click={this.changeUsernameHandler} currentUser={this.state.username}/>

      </div>
    )
  }
}

export default App;

