import React, { useState } from 'react';

function OneDayInfo({weatherData}) {
  const [error, setError] = useState(null);

  const farenheitToCelsius = (temperature) => {
    return Math.round(temperature - 273.15);
  } 

  return (
    <article>
      {weatherData && (
       
        <div id="show_what_you_got">
          <p>Ciudad: Madrid</p>
          <p>Fecha y Hora: {weatherData.dt_txt}</p>
          <p>Temperatura: {farenheitToCelsius(weatherData.main.temp)} °C</p>
          <p>Sensación térmica: { farenheitToCelsius(weatherData.main.feels_like) }°C</p>
          <p>Máxima prevista: {farenheitToCelsius(weatherData.main.temp_max)}°C</p>
          <p>Mínima prevista: {farenheitToCelsius(weatherData.main.temp_min)}°C</p>
          <p>Humedad: {weatherData.main.humidity}</p>
          {/* {getObjetInfo.weather && (
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].description}
            />
          )} */}
        </div>
      )}
      {error && (
        <div>Error al obtener los datos del tiempo.</div>
      )}
    </article>
  );
}

export default OneDayInfo;
