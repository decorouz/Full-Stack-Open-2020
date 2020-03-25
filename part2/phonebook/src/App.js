import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import AddContact from './components/AddContact';

import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchFilter, setsearchFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data);
    });
  }, []);

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleSearchFilter = event => {
    setsearchFilter(event.target.value);
  };

  const contactToShow = !searchFilter
    ? persons
    : persons.filter(p =>
        p.name.toLowerCase().includes(searchFilter.toLowerCase().trim())
      );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={searchFilter} filterHandler={handleSearchFilter} />
      <h3>Add a new</h3>
      <AddContact
        persons={persons}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
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
