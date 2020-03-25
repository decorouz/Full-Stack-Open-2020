import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import AddContact from './components/AddContact';
import phoneBookServices from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchFilter, setsearchFilter] = useState('');

  useEffect(() => {
    phoneBookServices.getAll().then(initialContants => {
      setPersons(initialContants);
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

  const handleRemovePerson = ({ id, name }) => {
    if (window.confirm(`Delete ${name}?`)) {
      phoneBookServices.remove(id).then(() => {
        phoneBookServices.getAll().then(returnedPersons => {
          setPersons(returnedPersons);
        });
      });
    }
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
      <Persons toShow={contactToShow} removeHandler={handleRemovePerson} />
    </div>
  );
};

export default App;
