import GetTodayInfo from "./GetTodayInfo/GetTodayInfo";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const MapInfo = () => {

    const [weatherData, setWeatherData] = useState(null);
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
              `https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${import.meta.env.VITE_OWK}`
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
 <GetTodayInfo weatherData= {weatherData}/>
  <article id="show_today">

  </article>
  
  
  </section>

  )
};

export default MapInfo;
