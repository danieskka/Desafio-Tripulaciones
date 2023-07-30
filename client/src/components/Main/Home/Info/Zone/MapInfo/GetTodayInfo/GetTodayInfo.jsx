import React, { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

function GetTodayInfo() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  async function getWeatherData() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${process.env.OWK}`
      );
      setWeatherData(response.data);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div>
      <button onClick={getWeatherData}>Madrid Hoy</button>
      {weatherData && (
        <div id="show_today">
          <p>Ciudad: {weatherData.name}</p>
          <p>Fecha: {new Date().toLocaleDateString()}</p>
          <p>Hora: {new Date().toLocaleTimeString()}</p>
          <p>Temperatura: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>Sensación térmica: {Math.round(weatherData.main.feels_like - 273.15)}°C</p>
          <p>Máxima prevista: {weatherData.main.temp_max}</p>
          <p>Mínima prevista: {weatherData.main.temp_min}</p>
          <p>Humedad: {weatherData.main.humidity}</p>
          {weatherData.weather && (
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].description}
            />
          )}
        </div>
      )}
      {error && (
        <div>Error al obtener los datos del tiempo.</div>
      )}
    </div>
  );
}

export default GetTodayInfo;
