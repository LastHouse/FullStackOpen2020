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
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);

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

  const ErrorNotification = ({ message }) => {
    if (message === null) {
      return null;
    }

    return <div className="error">{message}</div>;
  };

  const SuccessNotification = ({ message }) => {
    if (message === null) {
      return null;
    }

    return <div className="success">{message}</div>;
  };

  const addName = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (persons.filter((n) => n.name === newName).length === 0) {
      personService
        .newPerson(personObject)
        .then((response) => {
          setPersons([...persons, response]);
        })
        .catch((error) => console.log(error));
      setMessage(`Added ${newName}`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);

      setNewName(initialState);
      setNewNumber(initialState);
    } else {
      let person = persons.find((person) => person.name === newName);
      if (
        window.confirm(
          `${newName} is already in the phonebook. Do you want to replace the old number with a new one?`
        )
      ) {
        personService
          .modifyNumber(person.id, personObject)
          .then((response) => {
            setPersons(
              persons.map((item) => (item.id !== person.id ? item : response))
            );
            setMessage(`Modified ${newName}`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch((error) => {
            console.log(error);
            setErrorMessage(
              `the person ${person.name} was already deleted from server`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
            setPersons(persons.filter((n) => n.id !== person.id));
          });
      }
    }
    setNewName(initialState);
    setNewNumber(initialState);
  };

  const handleQuery = (e) => {
    setNewQuery(e.target.value);
  };

  const filteredPersons = persons.filter((item) =>
    item.name.toLowerCase().includes(newQuery.toString())
  );

  const delPerson = (id, name) => {
    if (
      window.confirm(`Do you really want to delete ${name} from the phonebook?`)
    ) {
      personService
        .deletePerson(id)
        .then((response) => {
          setMessage(`the person ${name} was deleted from server`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          setPersons(persons.filter((n) => n.id !== id));
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage(`the person ${name} was already deleted from server`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
          setPersons(persons.filter((n) => n.id !== id));
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ErrorNotification message={errorMessage} />
      <SuccessNotification message={message} />
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
