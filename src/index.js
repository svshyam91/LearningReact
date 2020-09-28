import React from 'react'
import ReactDOM from 'react-dom'


// Function based component 
const Person = (props) => {
  return(
    <div>
      <p>My name is {props.name} and my age is {props.age}. </p>
    </div>
  )
} 

ReactDOM.render(<Person name="Shyam" age="23" />, document.getElementById('root'));