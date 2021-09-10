import React, { useEffect, useState } from 'react'
import axios from 'axios'
  
  const Weather = (props) => {  

    const [ weather, setWeather] = useState([])
    const [ success, setSuccess ] = useState(false)

    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY

        axios
            .get('https://api.openweathermap.org/data/2.5/weather?q='+props.country.capital+'&appid='+api_key)
            .then(response => {
                setWeather(response.data)
                setSuccess(true)
            }).catch(error => {
                setWeather([])
                setSuccess(false)
        })
    }, [props.country.capital])
    
    if(success){
        return (
            <div>
                <h3>Weather in {props.country.capital}</h3>
                <p>Description: {weather.weather[0].description}</p>
                <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
                <p>Humidity: {Math.round(weather.main.humidity)}%</p>
                <p>Wind: {weather.wind.speed} m/s</p>
                <p>api.openweathermap.org doesn't provide weather icons</p>
            </div>
        )
    }
    return (
        <div>
            <p>Fetching weather data failed</p>
            <p>Get api key:</p>
            <a href="https://api.openweathermap.org">(https://api.openweathermap.org)</a>
        </div>
    )

}

export default Weather