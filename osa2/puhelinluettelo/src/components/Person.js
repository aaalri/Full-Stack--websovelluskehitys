import React from 'react'
  
  const Person = (props) => {  return (
		<p>
		  {props.person.name} {props.person.number} <button onClick={props.deletePerson}>delete</button>
		</p>
	 )
  }

export default Person