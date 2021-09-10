import React from 'react'
import Country from './Country'
import Weather from './Weather'
  
  const Countries = (props) => {  
    
    if(props.countriesToShow.length > 10){
      return (
        <p>
          Too many results, specify another filter
        </p>
      )
    } else if (props.countriesToShow.length === 1) {
      const country = props.countriesToShow[0]

      return (
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages</h3>
            <ul>
            {country.languages.map(language => <li key={language.name}> {language.name} </li> )}
            </ul>
            <img style={{height: 55+'px'}} alt={"flag of " + country.name} src={country.flag}></img>
            <Weather country={country}/>
        </div>
       )
    }
    return (
    <div>
        {props.countriesToShow.map(country => <Country key={country.name} country={country} getCountry={props.getCountry} />)}
    </div>
	 )
  }

export default Countries