import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;

const Weather = (props) => {
  const [currentWeather, setCurrentWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${props.capital}`
      )
      .then((response) => {
        setCurrentWeather({
          data: response.data,
          city: response.data.location.name,
          temp: response.data.current.temperature,
          description: response.data.current.weather_descriptions[0],
          icon: response.data.current.weather_icons[0],
          wind: response.data.current.wind_speed,
          windDir: response.data.current.wind_dir,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h3>Weather in {currentWeather.city}</h3>
      <div display="inline">
        <b>Temperature:</b> {currentWeather.temp} Celsius
      </div>
      <br></br>
      <div display="inline">
        <b>Feels like:</b> {currentWeather.description}
      </div>
      <br></br>
      <img src={currentWeather.icon} alt="icon" height="100" width="100"></img>
      <br></br>
      <br></br>
      <div display="inline">
        <b>Wind: </b> {currentWeather.wind} m/s direction{' '}
        {currentWeather.windDir}
      </div>
    </div>
  );
};

export default Weather;
