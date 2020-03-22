import React, { useState } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import ContactForm from './components/ContactForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchFilter, setsearchFilter] = useState('');

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleSearchFilter = event => {
    setsearchFilter(event.target.value);
  };

  const addPerson = event => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString()
    };
    const isFound = persons.find(
      p => p.name.toLowerCase() === newPerson.name.toLowerCase().trim()
    );
    if (isFound) {
      window.alert(`${newName.trim()} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
    }
  };

  const contactToShow = !searchFilter
    ? persons
    : persons.filter(p =>
        p.name.toLowerCase().includes(searchFilter.toLowerCase())
      );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={searchFilter} filterHandler={handleSearchFilter} />
      <h3>Add a new</h3>
      <ContactForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        nameChanegeHandler={handleNameChange}
        numberChangehandler={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons toShow={contactToShow} />
    </div>
  );
};

export default App;
