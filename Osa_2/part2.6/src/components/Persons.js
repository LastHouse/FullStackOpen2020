import React from 'react';

const Persons = ({ filterItems, filteredPersons, newQuery }) => {
  return (
    <div>
      <ul>
        {filterItems(filteredPersons, newQuery).map((person, i) => (
          <li key={i}>{person}</li>
        ))}
      </ul>
    </div>
  );
};
export default Persons;
