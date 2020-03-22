import React, { useState } from 'react';

const Person = props => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{props.person.name}</td>
            <td>{props.person.number}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '4444-44444-444' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = event => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString()
    };
    const isFound = persons.find(
      p => p.name.toLowerCase() === newPerson.name.toLowerCase()
    );
    if (isFound) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
      setNewName('');
    }
  };

  const handleInputChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default App;
