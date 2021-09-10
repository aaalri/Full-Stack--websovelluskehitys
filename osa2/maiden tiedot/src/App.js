import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'

import axios from 'axios'




  

const App = () => {
  const [ countries, setCountries] = useState([])
  const [ nameFilter, setNameFilter ] = useState('')


  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        })
  
    }, [])

  const getCountry = (country) => {
    setNameFilter(country.name)
  }
  
  const handleNameFilter= (event) => {
    setNameFilter(event.target.value)
  }

  const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(nameFilter.toLowerCase()))

  return (
    <div>
        <Filter nameFilter={nameFilter} handleNameFilter={handleNameFilter} />
        <Countries countriesToShow={countriesToShow} getCountry={getCountry} />
		</div>
  )
}

export default App