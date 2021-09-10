import React from 'react'

const Total = (props) => {  return (
    <p>Number of exercises {props.parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0)}</p>
    )
}

export default Total