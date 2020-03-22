import React from 'react';
import Person from './Person';

const Persons = ({ toShow }) => {
  return (
    <div>
      {toShow.map(person => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default Persons;
