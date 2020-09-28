import React, {useState} from 'react'
import ReactDOM from 'react-dom'

// Function based component 
const Person = (props) => {

  // 'useState()' returns array of 2 elements in which first element is state and 
  // second element is function to change that state.
  const [personState, setPersonState] = useState({
    name: "Shyam Kumar", 
    age: 23,
  });

  const [hobbiesState, setHobbiesState] = useState({
    hobbies: 'Programming, Cricket',
  })

  // Change state 
  const changeNameHandler = () => {
    setPersonState({
      name: "Mahindra Singh Dhoni",
      age: 38
    });

    setHobbiesState({
      hobbies: 'Programming, Cricket, Music'
    });
  }

  return(
    <div>
      <p>My name is {personState.name} and my age is {personState.age}. </p>
      <p>My hobbies are: {hobbiesState.hobbies}</p>
      <button onClick={changeNameHandler}>Change Name</button>
    </div>
  )
} 

ReactDOM.render(<Person name="Shyam" age="23" />, document.getElementById('root'));