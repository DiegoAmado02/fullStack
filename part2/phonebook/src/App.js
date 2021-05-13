import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import servicePerson from './services/phonebook'
import Notification from './components/Notification'
import './app.css'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [typeMessage, setTypeMessage] = useState('success')

  useEffect(() => {
    servicePerson.getAll()
      .then(initialPerson => {
        setPersons(initialPerson)
      })
  }, [])
  
  const handleNameFilter = (event) => {
    setNameFilter(event.target.value)
  }

  const showPerson = nameFilter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()

    const validateName = persons.some(person => person.name === newName)

    if (validateName) {
      const result = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new number`
      )
      if (result) {
        const personUpdate = {...persons.find(person => person.name === newName), number: newNumber}
        servicePerson.update(personUpdate.id, personUpdate).then(updatePerson => {
          setMessage(`Updated ${updatePerson.name}`)
          setTypeMessage('success')

          setTimeout(() => {
            setMessage(null)
          }, 3000)
          setPersons(persons.map(p => p.id !== updatePerson.id ? p :  updatePerson))
          setNewName('')
          setNewNumber('')
        })
      }
    }else{
        const newPerson = {
          id: persons.length + 1,
          name: newName,
          number: newNumber
        }

        servicePerson.create(newPerson).then(personObject => {
          setMessage(`Added ${personObject.name}`)
          setTypeMessage('success')

          setTimeout(() => {
            setMessage(null)
          }, 3000)

          setPersons([...persons, personObject])
          setNewName('')
          setNewNumber('')
        }).catch(err => console.error(err))
    }
  }

  const toggleDeletePerson = person =>{
    const result = window.confirm(`Delete ${person.name}?`)
    if (result) {
      servicePerson.deletePerson(person.id).then(deletePerson => {
        setPersons(persons.filter(p => p.id !== person.id))
      }).catch(err => {
          setMessage(`Information of ${person.name} has already been removed from server`)
          setTypeMessage('error')

          setTimeout(() => {
            setMessage(null)
          }, 3000);
      })
    }

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} typeMessage={typeMessage}/>
      <Filter filter={nameFilter} handleNameFilter={handleNameFilter}/>
      <h2>add a new</h2>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={showPerson} toggleDeletePerson={toggleDeletePerson}/>
    </div>
  );
}

export default App;
