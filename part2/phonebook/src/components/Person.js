import React from 'react';

const Person = props => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{props.person.name}</td>
            <td>{props.person.number}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Person;
