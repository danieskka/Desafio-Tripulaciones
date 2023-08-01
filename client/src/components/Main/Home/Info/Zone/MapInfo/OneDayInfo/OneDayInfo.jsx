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
          <p><b>Ciudad: </b> Madrid</p>
          <p><b>Fecha y hora:</b> {weatherData.dt_txt}</p>
          <p><b>Temperatura:</b> {farenheitToCelsius(weatherData.main.temp)} °C</p>
          <p><b>Sensación térmica:</b> { farenheitToCelsius(weatherData.main.feels_like) }°C</p>
          <p><b>Máxima prevista:</b> {farenheitToCelsius(weatherData.main.temp_max)}°C</p>
          <p><b>Mínima prevista:</b> {farenheitToCelsius(weatherData.main.temp_min)}°C</p>
          <p><b>Humedad(%):</b> {weatherData.main.humidity}</p>
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
