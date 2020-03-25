import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import AddContact from './components/AddContact';
import Notification from './components/Notifications';
import phoneBookServices from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchFilter, setsearchFilter] = useState('');
  const [notification, setNotification] = useState(null);
  const [notificationType, setNotificationType] = useState('');

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
      phoneBookServices
        .remove(id)
        .then(() => {
          phoneBookServices.getAll().then(returnedPerson => {
            setPersons(returnedPerson);
          });

          setNotificationType('successful');
          setNotification(`${name} was successfully deleted from server`);
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        })

        .catch(error => {
          setNotificationType('unsuccessful');
          setNotification(`${name} has already been removed from server`);
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        message={notification}
        notificationType={notificationType}
      />
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
        setNotification={setNotification}
        setNotificationType={setNotificationType}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        searchFilter={searchFilter}
        removeHandler={handleRemovePerson}
      />
    </div>
  );
};

export default App;
