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
  setNewName,
  setNotification,
  setNotificationType
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
      const id = isFound.id;

      if (
        window.confirm(
          `${newName} is already added to phonebook. Do you want to replace the old number with a new one?`
        )
      ) {
        phoneBookServices
          .update(id, newPerson)
          .then(returnedPerson => {
            setPersons(
              persons.map(person =>
                person.id !== id ? person : returnedPerson
              )
            );

            setNotification(`${returnedPerson.name} number has been updated`);
            setNotificationType('successful');
            setTimeout(() => {
              setNotification(null);
            }, 5000);
            setNewName('');
            setNewNumber('');
          })

          .catch(error => {
            setNotificationType('unsuccessful');
            setNotification(
              `${isFound.name} has already been deleted from server`
            );
            setTimeout(() => {
              setNotification(null);
            }, 5000);
          });
      }
    } else {
      phoneBookServices.create(newPerson).then(returnedContact => {
        setPersons(persons.concat(returnedContact));
      });

      setNotification(`Added ${newPerson.name} successfully`);
      setNotificationType('successful');
      setTimeout(() => {
        setNotification(null);
      }, 5000);

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
