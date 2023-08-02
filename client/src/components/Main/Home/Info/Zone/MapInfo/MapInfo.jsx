import React, { useState, useEffect } from 'react';
import OneDayInfo from "./OneDayInfo"
import axios from 'axios';


const MapInfo = () => {

    // const [weatherData, setWeatherData] = useState({});
    // const [getObjetInfo, setGetObjetInfo] = useState({})
    // const [getObjetInfoT, setGetObjetInfoT] = useState({})
    // const [error, setError] = useState(null);
    // const [loaded, setLoading] = useState(true);

    
    // const[time, setTime] = useState('');

    // const todayWeather = () => {     
    //   const today= 'today'       
    //   setTime(today)   
    // }

    // const tomorrowWeather = () => {     
    //   const tomorrow= 'tomorrow'       
    //   setTime(tomorrow)   
    // }
      
    // console.log(time)

    // useEffect(() => {
    //   if (time === 'today') {
    //     const getTodayData = async () => {
    //       try {
    //         const response = await axios.get(
    //           `https://api.openweathermap.org/data/2.5/forecast?q=Madrid&appid=${import.meta.env.VITE_OWK}`
    //         );
    //         setCompleteWeatherData(response.data);
    //       } catch (error) {
    //         setError(error);
    //       } finally {
    //         setLoading(false);
    //       }
    //     };
    
    //     getTodayData();
    //   }
    // }, [time]);
    



    // useEffect(() => {
    //   if (Object.keys(completeWeatherData).length) {

    //     console.log(completeWeatherData)

    //     const getWeatherInfo = {
    //       ciudad: completeWeatherData.city.name,
    //       fecha_hora: completeWeatherData.list[0].dt_txt,
    //       temperatura: Math.round(completeWeatherData.list[0].main.temp - 273.15),
    //       sensacion_termica: Math.round(completeWeatherData.list[0].main.feels_like - 273.15),
    //       maxima_prevista: Math.round(completeWeatherData.list[0].main.temp_max - 273.15),
    //       minima_prevista: Math.round(completeWeatherData.list[0].main.temp_min - 273.15),
    //       humedad: completeWeatherData.list[0].main.humidity
    //       //img: weatherData.weather && `https://openweathermap.org/img/wn/${weatherData.list[1].weather[0].icon}.png`
    //     };
    //     setGetObjetInfo(getWeatherInfo);
    //   }
    // }, [completeWeatherData]);
    





    // useEffect(() => {
    //   if (time === 'tomorrow') {
    //     const getTomorrowData = async () => {
    //       try {
    //         const response = await axios.get(
    //           `https://api.openweathermap.org/data/2.5/forecast?q=Madrid&appid=${import.meta.env.VITE_OWK}`
    //         );
    //         setCompleteWeatherData(response.data);
    //       } catch (error) {
    //         setError(error);
    //       } finally {
    //         setLoading(false);
    //       }
    //     };
    
    //     getTomorrowData();
    //   }
    // }, [time]);
    



    // useEffect(() => {
    //   if (Object.keys(completeWeatherData).length) {

    //     console.log(completeWeatherData)

    //     const getWeatherInfo = {
    //       ciudad: completeWeatherData.city.name,
    //       fecha_hora: completeWeatherData.list[0].dt_txt,
    //       temperatura: Math.round(completeWeatherData.list[1].main.temp - 273.15),
    //       sensacion_termica: Math.round(completeWeatherData.list[1].main.feels_like - 273.15),
    //       maxima_prevista: Math.round(completeWeatherData.list[1].main.temp_max - 273.15),
    //       minima_prevista: Math.round(completeWeatherData.list[1].main.temp_min - 273.15),
    //       humedad: completeWeatherData.list[1].main.humidity
    //       //img: weatherData.weather && `https://openweathermap.org/img/wn/${weatherData.list[1].weather[0].icon}.png`
    //     };
    //     setGetObjetInfo(getWeatherInfo);
    //   }
    // }, [completeWeatherData]);

      // useEffect(() => {
  //     // llamada API
  //     getWeatherData(activeFilter)
  // }, [activeFilter])
    





  const [activeFilter, setActiveFilter] = useState(null);
  const [completeWeatherData, setCompleteWeatherData] = useState(null);
  const [activeFilterWeatherData, setActiveFilterWeatherData] = useState(null);

  // En primera carga guardamos la petición entera
  useEffect(() => {
    getWeatherData();
  }, [])

  useEffect(() => {
    if (completeWeatherData) {
      setActiveFilter('today');
    }
  }, [completeWeatherData])

  useEffect(() => {
    if (activeFilter) {
      getActiveFilterWeatherData(activeFilter) 
    }
  }, [activeFilter]);

  const getActiveFilterWeatherData = (filter) => {
    const WEATHER_DAYS = {
      today: 0,
      tomorrow: 8,
      afterTomorrow: 16,
    }

    const data = completeWeatherData.list[WEATHER_DAYS[filter]];
    setActiveFilterWeatherData(data)
  }

  
  const onClickFilter = (date) => {
    setActiveFilter(date)
  }

  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=Madrid&appid=${import.meta.env.VITE_OWK}`
      );

      setCompleteWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  }


  return (
  <section className='mapinfogeneral'>
    
    <article className="infosearch">
    <p>¿Qué zona te interesa consultar?</p>
    <div className="infosearch_input"></div>

  {/* <input type="text" placeholder="Madrid City" id="getProvinceName" name="name"></input> */}
  </article>
  <article className="infofilters">
    <button className="b_filter" onClick={() => onClickFilter('today')}>Hoy</button>
    <button className="b_filter" onClick={() => onClickFilter('tomorrow')}>Mañana</button>
    <button className="b_filter" onClick={() => onClickFilter('afterTomorrow')}>Pasado</button>
  </article>
  <article>
  {activeFilterWeatherData && <OneDayInfo weatherData={activeFilterWeatherData} />}
  </article>
  <article className='briconsejo'>

  </article>
  </section>

  )
};

export default MapInfo;
