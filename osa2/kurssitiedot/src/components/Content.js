import React from 'react'
import Part from './Part'

  const Content = (props) => {  return (
		<div>
          {props.course.parts.map(part => <Part key={part.id} part={part} />)}
		</div>
	 )
  }
  
export default Content