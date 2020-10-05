import React from "react";
import "./App.css";

// Form using Textarea 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
    }
    this.textareaHandler = this.textareaHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  textareaHandler(event) {
    this.setState({comment: event.target.value});
  }

  submitHandler(event) {
    alert('User entered: '+this.state.comment);
    event.preventDefault();
  }

  render() {
   return(
    <div>
      <form onSubmit={this.submitHandler}>
        <label>
          Essay:
          <textarea  
            value={this.state.comment}
            onChange={this.textareaHandler} />
        </label>
        <input type='submit' value='submit' />
      </form>
    </div>
   )
  }
}

export default App;
