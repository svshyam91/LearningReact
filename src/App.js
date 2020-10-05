import React from "react";
import "./App.css";

// Form as Controlled Component

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
    }
    this.usernameHandler = this.usernameHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  usernameHandler(event) {
    this.setState({username: event.target.value});
  }

  submitHandler(event) {
    alert('User entered: '+this.state.username);
    event.preventDefault();
  }

  render() {
   return(
    <div>
      <form onSubmit={this.submitHandler}>
        <input 
          type='text' 
          name='username' 
          value={this.state.username}
          onChange={this.usernameHandler}/>
        <input type='submit' value='submit' />
      </form>
    </div>
   )
  }
}

export default App;
