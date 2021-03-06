import React from 'react';

const Person = ({ person, delPerson }) => {
  return (
    <div>
      <li>
        {person.name} {person.number}{' '}
        <button onClick={() => delPerson(person.id, person.name)}>
          Delete
        </button>
      </li>
    </div>
  );
};
export default Person;
