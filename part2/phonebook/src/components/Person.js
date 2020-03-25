import React from 'react';

const Person = ({ person, removeHandler }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td>
              <button onClick={() => removeHandler(person)}>delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Person;
