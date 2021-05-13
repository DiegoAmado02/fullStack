import React from 'react'

const ListCountries = ({name, handleShow}) => <li>{name} <button value={name} onClick={handleShow}>show</button></li>

const Countries = ({countries, handleShow}) =>{

  if (countries.length > 10) {
    return <label>Too many matches, specify another filter</label>
  }else{
    return (
      <ul>
        {countries.map((country) => <ListCountries key={country.alpha2Code} name={country.name} handleShow={handleShow}/>)}
      </ul>
    )
  }
}

export default Countries