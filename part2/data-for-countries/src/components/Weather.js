import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = 'http://api.weatherstack.com/current';

const Weather = ({ city }) => {
  const [cityWeather, setCityWeather] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}?access_key=${apiKey}&query=${city}`)
      .then(response => {
        setCityWeather(response.data);
      });
  }, [city]);

  const weatherStatus = cityWeather.location ? (
    <>
      <div>
        <b>temperature: </b>
        {cityWeather.current.temperature} Celcius
      </div>
      <img src={cityWeather.current.weather_icons} alt="" />
      <div>
        <b>wing:</b> {cityWeather.current.wind_speed} mph direction{' '}
        {cityWeather.current.wind_dir}
      </div>
    </>
  ) : (
    <div>loading....</div>
  );

  return (
    <div>
      <h3>Weather in {city}</h3>
      {weatherStatus}
    </div>
  );
};

export default Weather;
