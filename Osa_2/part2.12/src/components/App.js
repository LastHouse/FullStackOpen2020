import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newQuery, setNewQuery] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleQuery = (e) => {
    e.preventDefault();
    setNewQuery(e.target.value);
  };

  const foundCountries = countries.filter(function (country) {
    return (
      country.name
        .toString()
        .toLowerCase()
        .indexOf(newQuery.toString().toLowerCase()) !== -1
    );
  });

  const List = ({ list }) => {
    if (!list) {
      return null;
    }

    if (foundCountries.length > 9) {
      return <p>Too Many Matches, specify another filter</p>;
    }

    if (foundCountries.length === 1) {
      return (
        <div>
          {foundCountries.map((item, i) => (
            <div key={i}>
              <h2>{item.name}</h2>
              <p>Capital: {item.capital}</p>
              <p>Population: {item.population}</p>
              <h3>Languages</h3>
              {foundCountries.map((item) =>
                item.languages.map((x) => (
                  <div key={x.nativeName}>
                    <li>{x.name}</li>
                  </div>
                ))
              )}
              <br></br>
              <img src={item.flag} alt="flag" height="72" width="144"></img>
              <br></br>
              <Weather capital={item.capital} />
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          {foundCountries.map((item, i) => (
            <div key={i}>
              <p>{item.name}</p>
              <button
                onClick={() => {
                  setNewQuery(item.name);
                }}
              >
                Show Country
              </button>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      Find Countries{' '}
      <input type="text" name="query" value={newQuery} onChange={handleQuery} />
      <List list={foundCountries} />
    </div>
  );
};

export default App;
