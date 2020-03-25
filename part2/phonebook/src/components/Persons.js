import React from 'react';
import Person from './Person';

const Persons = ({ toShow, removeHandler }) => {
  return (
    <div>
      {toShow.map(person => (
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
