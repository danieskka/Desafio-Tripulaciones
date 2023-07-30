import GetTodayInfo from "./GetTodayInfo/GetTodayInfo";
import GetTomorrowInfo from "./GetTomorrowInfo/GetTomorrowInfo";
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

    const tomorrowWeather = () => {     
      const tomorrow= 'tomorrow'       
      setTime(tomorrow)   
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
          fecha_hora: weatherData.list[0].dt_txt,
          temperatura: Math.round(weatherData.list[0].main.temp - 273.15),
          sensacion_termica: Math.round(weatherData.list[0].main.feels_like - 273.15),
          maxima_prevista: Math.round(weatherData.list[0].main.temp_max - 273.15),
          minima_prevista: Math.round(weatherData.list[0].main.temp_min - 273.15),
          humedad: weatherData.list[0].main.humidity
          //img: weatherData.weather && `https://openweathermap.org/img/wn/${weatherData.list[1].weather[0].icon}.png`
        };
        setGetObjetInfo(getWeatherInfo);
      }
    }, [weatherData]);
    





    useEffect(() => {
      if (time === 'tomorrow') {
        const getTomorrowData = async () => {
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
    
        getTomorrowData();
      }
    }, [time]);
    



    useEffect(() => {
      if (Object.keys(weatherData).length) {

        console.log(weatherData)

        const getWeatherInfo = {
          ciudad: weatherData.city.name,
          fecha_hora: weatherData.list[0].dt_txt,
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
    <button className="b_filter" onClick={tomorrowWeather}>Mañana</button>
    <button className="b_filter">5 días</button>
  </article>
 <GetTodayInfo weatherData= {getObjetInfo}/>
 <GetTomorrowInfo weatherData= {getObjetInfo}/>
  
  
  
  
  </section>

  )
};

export default MapInfo;
