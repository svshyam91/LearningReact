import React from "react";
import "./App.css";

// Udemy course Exercise, Learn display dynamic content, passing function reference, two-way binding, 
// conditional rendering, rendering list of items

function ValidationComponent(props) {
  const minLength = 5;
  if (props.usernameLength > minLength) {
    return <p>Text long enough!!</p>;
  } else {
    return <p>Text too short!!</p>;
  }
}

function CharComponent(props) {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };
  return (
    <div style={style} onClick={props.clicked}>
      {props.character}
    </div>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
  }

  charHandler = (index) => {
    let usernameArr = this.state.username.split("");
    
    usernameArr.splice(index, 1);
    const newUsername = usernameArr.join("");
    this.setState({ username: newUsername });
  };

  changeUsernameHandler = (e) => {
    const username = e.target.value;

    this.setState({username: username});
  };

  render() {
    const usernameArray = this.state.username.split("");
    const charCompItems = usernameArray.map((char, index) => {
      return (
        <CharComponent
          character={char}
          index={index}
          clicked={this.charHandler.bind(this,index)}
        />
      );
    });
    return (
      <div>
        Enter Username:
        <input
          type="text"
          name="username"
          onChange={this.changeUsernameHandler}
          value={this.state.username}
        />
        <p>Username: {this.state.username}</p>
        <br />
        <ValidationComponent usernameLength={this.state.username.length} />
        {charCompItems}
      </div>
    );
  }
}

export default App;
