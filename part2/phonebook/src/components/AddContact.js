import React from 'react';
import phoneBookServices from '../services/phonebook';

const AddContact = ({
  persons,
  newName,
  newNumber,
  nameChanegeHandler,
  numberChangehandler,
  setPersons,
  setNewNumber,
  setNewName
}) => {
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
      phoneBookServices.create(newPerson).then(returnedContact => {
        setPersons(persons.concat(returnedContact));
      });
      setNewName('');
      setNewNumber('');
    }
  };
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={nameChanegeHandler} />
        </div>
        <div>
          number: <input value={newNumber} onChange={numberChangehandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
