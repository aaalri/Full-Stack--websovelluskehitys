import React from 'react'
  
  const Country = (props) => {  return (
		<p>
		  {props.country.name} <button onClick={() => props.getCountry(props.country)}>show</button>
		</p>
	 )
  }

export default Country