import React from 'react';
import Person from './Person';

const Persons = ({ persons, searchFilter, removeHandler }) => {
  const contactToShow = !searchFilter
    ? persons
    : persons.filter(p =>
        p.name.toLowerCase().includes(searchFilter.toLowerCase().trim())
      );

  return (
    <div>
      {contactToShow.map(person => (
        <Person
          key={person.name}
          person={person}
          removeHandler={removeHandler}
        />
      ))}
    </div>
  );
};

export default Persons;
