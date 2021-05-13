import React from 'react'
import Weather from './Weather'

const Languages = ({languages}) => {
  return(
    <div>
        <h2>languages</h2>
        <ul>
            {languages.map((language, index) => <li key={index}>{language.name}</li>)}
        </ul>
    </div>
  )
}

const DetailsCountry = ({country}) => {
    return(
        <div>
            <h1>{country.name}</h1>
            <p> capital {country.capital}</p>
            <p>population {country.population}</p>
            <Languages languages={country.languages}/>
            <img className="img" src={country.flag} alt={country.flag}/>
            <Weather capital={country.capital}/>
        </div>
    )
}

export default DetailsCountry