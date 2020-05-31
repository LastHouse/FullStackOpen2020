import React, { useState, useEffect } from 'react';
import FilterPerson from './components/FilterPerson';
import AddPerson from './components/AddPerson';
import Person from './components/Person';
import personService from './services/persons';

const App = () => {
  const initialState = '';
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState(initialState);
  const [newNumber, setNewNumber] = useState(initialState);
  const [newQuery, setNewQuery] = useState(initialState);

  useEffect(() => {
    personService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

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
      personService.newPerson(personObject).then((response) => {
        setPersons([...persons, response]);
      });
      setNewName(initialState);
      setNewNumber(initialState);
    } else {
      console.log(newName);
      let person = persons.find((person) => person.name === newName);
      console.log(person.id);
      if (
        window.confirm(
          `${newName} is already in the phonebook. Do you want to replace the old number with a new one?`
        )
      ) {
        personService.modifyNumber(person.id, personObject).then((response) => {
          personService.getAll().then((persons) => {
            setPersons(persons);
          });
        });
      }

      setNewName(initialState);
      setNewNumber(initialState);
    }
  };

  const handleQuery = (e) => {
    setNewQuery(e.target.value);
  };

  const filteredPersons = persons.filter((item) =>
    item.name.toLowerCase().includes(newQuery.toString())
  );

  const delPerson = (id) => {
    if (
      window.confirm(
        'Do you really want this person to be deleted from the phonebook?'
      )
    ) {
      personService.deletePerson(id).then((response) => {
        setPersons(persons.filter((n) => n.id !== id));
      });
    }
  };

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
      <ul>
        {filteredPersons.map((person, i) => (
          <Person key={i} person={person} delPerson={delPerson} />
        ))}
      </ul>
    </div>
  );
};

export default App;
