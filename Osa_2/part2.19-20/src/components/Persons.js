import React from 'react';

const Persons = ({ filterItems, filteredPersons, newQuery, delPerson }) => {
  console.log(filteredPersons);
  return (
    <div>
      <ul>
        {filterItems(filteredPersons, newQuery, delPerson).map((person, i) => (
          <li key={i}>
            {person} <button onClick={delPerson(person.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Persons;
