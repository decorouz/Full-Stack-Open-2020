import React, { useState } from 'react';

const Person = props => {
  return <div>{props.person.name}</div>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addPerson = event => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      date: new Date().toISOString()
    };
    setPersons(persons.concat(newPerson));
    setNewName('');
  };

  const handleInputChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
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
