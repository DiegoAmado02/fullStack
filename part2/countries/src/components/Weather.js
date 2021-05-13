import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({capital}) => {
    
    const [weather, setWeather] = useState([])

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`)
            .then((response) => {
                setWeather(response.data.current)
            })
    }, [capital])

    return(
        <div>
            <h2>Weather in {capital}</h2>
            <p><strong>temperature</strong> {weather.temperature} celsius</p>
            <img src={weather.weather_icons} alt={weather.weather_icons} />
            <p><strong>wind</strong> {weather.wind_speed} mph direction {weather.wind_dir}</p>
        </div>
    )
}

export default Weather
