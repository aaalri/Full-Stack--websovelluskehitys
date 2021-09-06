import React, { useState } from 'react'


const StatisticLine = (props) => <tr><td>{props.text}</td><td>{props.value}{props.text2}</td></tr>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
	if (props.all === 0) {  
		return (
			<div> No feedback given </div>  
		)		
	}
	return (
	<table>
		<tbody>
			<StatisticLine text="good" value={props.good} />
			<StatisticLine text="neutral" value={props.neutral} />
			<StatisticLine text="bad" value={props.bad} />
			<StatisticLine text="all" value={props.all} />
			<StatisticLine text="average" value={props.average} />
			<StatisticLine text="positive" value={props.positive} text2="%" />
		</tbody>
	</table>
	)
}	


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => {
    setGood(newValue)
  }
  
  const setToNeutral = newValue => {
    setNeutral(newValue)
  }
  
  const setToBad = newValue => {
    setBad(newValue)
  }

  return (
    <div>
	  <h1> Give feedback </h1>
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />  
	  <h1> Statistics </h1>
	  <Statistics good={good} neutral = {neutral} bad = {bad} all = {good+neutral+bad} average = {(good-bad)/(good+neutral+bad)} positive = {good/(good+neutral+bad)*100} />
    </div>
  )
  
}

export default App