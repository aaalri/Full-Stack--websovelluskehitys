import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import { SuccessNotification, ErrorNotification } from './components/Notifications'
import personService from './services/persons'
  
const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')
  const [ successMessage, setSuccessMessage] = useState(null)
  const [ errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        })
  }, [])

  const handleNameFilter= (event) => {
    setNameFilter(event.target.value)
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  
  const addPerson = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)){
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const personObject = {
          name: newName,
          number: newNumber,
        }
        let findPerson = persons.find(person => person.name.includes(newName))
        personService
          .update(findPerson.id, personObject)
          .then(returnedPerson => {
            const copy = [...persons]
            findPerson = copy.find(person => person.name.includes(newName))
            findPerson.number = newNumber
            setPersons(copy)
            setNewName('')
            setNewNumber('')  
            setSuccessMessage( 
              `${newName}'s number changed.`  
              )       
            setTimeout(() => { 
              setSuccessMessage(null)       
              }, 5000)
          }).catch(error => {
            setErrorMessage( 
              `Information of ${newName} has already been deleted from the server.`  
              )       
            setTimeout(() => { 
              setErrorMessage(null)       
              }, 5000)
            setPersons(persons.filter(p => p.id !== findPerson.id))
          })
      }
      return
    }    
    const personObject = {
      name: newName,
      number: newNumber,
    }
    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')  
      })
      setSuccessMessage( 
        `Succesfully added '${newName}'`  
        )       
      setTimeout(() => { 
        setSuccessMessage(null)       
        }, 5000)
  }

  const deletePerson = (person) => {
    if (persons.includes(person)){
      if (window.confirm(`Delete ${person.name}?`)) {
        personService
        .remove(person.id)
        .then(returnedPerson => {
          setPersons(persons.filter(p => p.id !== person.id))
        })
        setSuccessMessage( 
          `Succesfully removed '${person.name}'`  
          )       
        setTimeout(() => { 
          setSuccessMessage(null)       
          }, 5000)
      }      
    }    
  }

  return (
    <div>
        <SuccessNotification message={successMessage} />
        <ErrorNotification message={errorMessage} />
      <h2>Phonebook</h2>
        <Filter nameFilter={nameFilter} handleNameFilter={handleNameFilter} />
      <h2>Add a new person</h2>
        <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
        <Persons personsToShow={personsToShow} deletePerson={deletePerson} />
		</div>
  )
}

export default App