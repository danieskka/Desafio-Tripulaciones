import React, { useState } from 'react';
import axios from 'axios';


function GetTodayInfo({weatherData}) {
  
  const [error, setError] = useState(null);

  console.log(weatherData)
  return (
    <article>
      {weatherData && (
       
        <div id="show_today">
          <p>Ciudad: {weatherData.name}</p>
          <p>Fecha: {new Date().toLocaleDateString()}</p>
          <p>Hora: {new Date().toLocaleTimeString()}</p>
          <p>Temperatura: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>Sensación térmica: {Math.round(weatherData.main.feels_like - 273.15)}°C</p>
          <p>Máxima prevista: {Math.round(weatherData.main.temp_max - 273.15)}°C</p>
          <p>Mínima prevista: {Math.round(weatherData.main.temp_min- 273.15)}°C</p>
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
    </article>
  );
}

export default GetTodayInfo;
