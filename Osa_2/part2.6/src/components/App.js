import React, { useState } from 'react';
import FilterPerson from './FilterPerson';
import AddPerson from './AddPerson';
import Persons from './Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newQuery, setNewQuery] = useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (persons.filter((n) => n.name === newName).length === 0) {
      setPersons(persons.concat(personObject));
    } else {
      alert(`${newName} is already in the phonebook`);
    }
    setNewName('');
    setNewNumber('');
  };

  const filterItems = (arr, query) => {
    return arr.filter(
      (el) =>
        el.toString().toLowerCase().indexOf(query.toString().toLowerCase()) !==
        -1
    );
  };

  const handleQuery = (e) => {
    setNewQuery(e.target.value);
  };

  const filteredPersons = persons.map((el) => el.name + ' ' + el.number);

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterPerson handleQuery={handleQuery} newquery={newQuery} />

      <AddPerson
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons
        filterItems={filterItems}
        newQuery={newQuery}
        filteredPersons={filteredPersons}
      />
    </div>
  );
};

export default App;
