import React from 'react'
import ReactDOM from 'react-dom'

// Clock using props
class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Shyam',
      age: 23
    }
  }

  clickHandler(fnName, lastName) {
    // In this function, 'this' keyword will not work without 'bind()' because here this refers to the element that triggered click event 
    // which is ButtonElement

    console.log('First name: '+fnName+' Last Name: '+lastName);
    console.log('This is '+this.state.name);
  }

  linkHandler = (e) => {
    e.preventDefault();
    console.log('You have clicked on a link.');
    console.log('linkHandler this is'+this.state.name);
  }

  render() {
    return(
      <div>
        <button onClick={this.clickHandler.bind(this, 'Harkesh', 'Verma')}>Click me!!</button>
        <a href="#" onClick={this.linkHandler}>Open Google</a>
      </div>
    )
  }

} 

ReactDOM.render(<Person />, document.getElementById('root'));
