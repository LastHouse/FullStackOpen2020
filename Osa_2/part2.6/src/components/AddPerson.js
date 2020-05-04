import React from 'react';

const AddPerson = ({
  addName,
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <div>
      {' '}
      <form onSubmit={addName}>
        <h2>Add new</h2>
        <div>
          name:{' '}
          <input
            type="text"
            name="name"
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:{' '}
          <input
            type="text"
            name="number"
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>{' '}
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};
export default AddPerson;
