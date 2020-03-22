import React from 'react';

const ContactForm = ({
  addPerson,
  newName,
  newNumber,
  nameChanegeHandler,
  numberChangehandler
}) => {
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

export default ContactForm;
