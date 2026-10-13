import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (newName === '') { // prevent adding blank name
      return
    }
    setPersons(persons.concat({ name: newName }))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons}/>

      <div>debug: {newName}</div>

    </div>
    
  )
}

const Numbers = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ul>
  )
}

export default App