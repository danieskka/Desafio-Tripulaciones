import GetTodayInfo from "./GetTodayInfo/GetTodayInfo";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const MapInfo = () => {

    const [weatherData, setWeatherData] = useState({});
    const [getObjetInfo, setGetObjetInfo] = useState({})
    const [error, setError] = useState(null);
    const [loaded, setLoading] = useState(true);

    
    const[time, setTime] = useState('');
    const todayWeather = () => {     
      const today= 'today'       
      setTime(today)   
    }
      
    console.log(time)

    useEffect(() => {
      if (time === 'today') {
        const getTodayData = async () => {
          try {
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/forecast?q=Madrid&appid=${import.meta.env.VITE_OWK}`
            );
            setWeatherData(response.data);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        getTodayData();
      }
    }, [time]);
    



    useEffect(() => {
      if (Object.keys(weatherData).length) {

        console.log(weatherData)

        const getWeatherInfo = {
          ciudad: weatherData.city.name,
          fecha_hora: weatherData.list[1].dt_txt,
          temperatura: Math.round(weatherData.list[1].main.temp - 273.15),
          sensacion_termica: Math.round(weatherData.list[1].main.feels_like - 273.15),
          maxima_prevista: Math.round(weatherData.list[1].main.temp_max - 273.15),
          minima_prevista: Math.round(weatherData.list[1].main.temp_min - 273.15),
          humedad: weatherData.list[1].main.humidity
          //img: weatherData.weather && `https://openweathermap.org/img/wn/${weatherData.list[1].weather[0].icon}.png`
        };
        setGetObjetInfo(getWeatherInfo);
      }
    }, [weatherData]);
    




  return (
  <section className='mapinfogeneral'>
    
    <article className="infosearch">
    <p>Elige ciudad:</p>
  <input type="text" placeholder="Madrid City" id="getProvinceName" name="name"></input>
  </article>
  <article className="infofilters">
    <button className="b_filter" onClick={todayWeather}>Hoy</button>
    <button className="b_filter">Mañana</button>
    <button className="b_filter">5 días</button>
  </article>
 <GetTodayInfo weatherData= {getObjetInfo}/>
  <article id="show_today">

  </article>
  
  
  </section>

  )
};

export default MapInfo;
