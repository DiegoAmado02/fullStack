import React, { useState, useEffect } from 'react'
import DetailsCountry from './components/DetailsCountry'
import Countries from './components/Countries'
import axios from 'axios'
import './index.css'

const  App = () => {
  const [countries, setCountries] = useState([])
  const [nameCountry, setNameCountry] = useState('')

  const showCountries = nameCountry === '' ? countries : countries.filter(country => country.name.toLowerCase().includes(nameCountry.toLowerCase()))

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) =>{
        const data = response.data
        setCountries(data)
      })
  }, [])

  const handleChangeNameCountry = (event) => {
    setNameCountry(event.target.value)
  }

  const handleShow = (event) => {
    setNameCountry(event.target.value)
  }

  return (
    <div>
      <div>
        find countries <input value={nameCountry} onChange={handleChangeNameCountry}/>
      </div>
      {showCountries.length === 1 ? <DetailsCountry country={showCountries[0]} /> : <Countries handleShow={handleShow} countries={showCountries}/>}
    </div>
  )
}

export default App
