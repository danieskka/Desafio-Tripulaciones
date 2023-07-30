import React, { useState } from 'react';

function GetTodayInfo({weatherData}) {
  
  const [error, setError] = useState(null);

  return (
    <article>
      {weatherData && (
       
        <div id="show_today">
          <p>Ciudad: {weatherData.ciudad}</p>
          <p>Fecha y Hora: {weatherData.fecha_hora}</p>
          <p>Temperatura: {weatherData.temperatura }°C</p>
          <p>Sensación térmica: {weatherData.sensacion_termica }°C</p>
          <p>Máxima prevista: {weatherData.maxima_prevista }°C</p>
          <p>Mínima prevista: {weatherData.minima_prevista }°C</p>
          <p>Humedad: {weatherData.humedad}</p>
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

export default GetTodayInfo;
