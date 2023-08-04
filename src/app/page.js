'use client'

import { useState, useEffect } from 'react';
import LocationSearch from '../../components/LocationSearch';
import LocationSearchInput from '../../components/LocationSearchInput';
import WeatherForecast from '../../components/WeatherForecast';
import WeatherCard from '../../components/ForecastList';
import ForecastList from '../../components/ForecastList';
import TodayForecast from '../../components/TodayForecast';
import { faLocationCrosshairs, faLocationDot, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import backgroundImage from '/images/HeavyCloud.png'
import format from 'date-fns/format';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);



  const handleSearch = async (lat, lng) => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      setWeather(data);
      setWeatherData(true)
      await handleForecast(lat, lng);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleForecast = async (lat, lng) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json('');

      setForecast(data);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      await handleSearch(latitude, longitude);
    }, (error) => {
      
      console.error('Error obtaining location, defaulting to São Paulo: ', error);
      handleSearch(-23.5505, -46.6333);
    });
  }, []);



  return (

    <div>
      <main className='main-grid sm:col-1 lg:col-end-1'>
        <section className='container1 bg-primary box-border md:max-w-md m-0 
    lg:max-w-sm xl:max-md 2xl:max-w-md'>
          <div>
            <LocationSearch onSearch={handleSearch} />
          </div>

          <div className='flex flex-row items-center mx-8 mt-3 mb-20'>

            {/* <button className='p-3 px-6 bg-cinza text-center text-white'>Search for places</button> */}


            {/* <div className='p-5 ml-auto w-20'><FontAwesomeIcon icon={faLocationCrosshairs}
              className=' bg-cinza 
        rounded-full text-xl text-white p-4' /></div> */}

          </div>


          <div className='flex flex-col items-center mt-28'>

            <div style={backgroundImage} className='temperature image bg-cover '>
              <div className='flex items-center justify-center h-full'>
                <TodayForecast weather={weather?.weather} />
              </div>
            </div>

            <div className='mt-28 flex flex-row items-baseline text-text'>
              {weather && (
                <>
                  <p className='text-9xl'>{Math.round(weather.main.temp)}</p>
                  <p className='text-4xl text-text2'>°C</p>
                </>
              )}
            </div>

            <div className='mt-20 flex flex-col items-center'>
              {weather && (
                <>
                  <p className='text-4xl font-semibold text-text2'>{weather.weather[0].main}</p>

                  <div className='text-lg text-text2 mt-28 flex flex-row'>
                    <p>Today </p>
                    <p className='mx-5'>.</p>
                    <p>{format(new Date(weather.dt * 1000), 'EEE, d MMM')}</p>
                  </div>



                  <div className='flex flex-row items-center text-lg text-text2 m-2'>
                    <FontAwesomeIcon className='mr-2' icon={faLocationDot}></FontAwesomeIcon>
                    <p className='mb-2'>{weather.name}</p>

                  </div>

                </>
              )}
            </div>
          </div>
        </section>


        <section className='container2 p-9 grid grid-cols-1 '>

          <div className='cards-day bg-background  items-center'>


            <div className='flex '>
              {forecast && <ForecastList forecasts={forecast.list} className='text-white' />}
            </div>

            <h1 className='text-text text-3xl mt-4'>Today’s Hightlights </h1>

            {weather && (
              <>
                <div className='todays-cards bg-primary mt-5 w-96 h-52 ml-1 d-flex 
       justify-center items-center text-center text-text'>

                  <div>
                    <div>
                      <h1 className='pt-7 text-base font-medium'>Wind status</h1>
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                      <p className='text-6xl mr-2'>{(weather.wind.speed * 2.23694).toFixed(0)}</p>
                      <p className='text-4xl'>mph</p>
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                      <FontAwesomeIcon icon={faLocationArrow} rotation={180} />
                      <p className='ml-2'>WSW</p>
                    </div>
                  </div>
                </div>
                <div className='todays-cards bg-primary mt-5 w-96 h-52 ml-1 d-flex 
       justify-center items-center text-center text-text'>

                  <div>
                    <div>
                      <h1 className='pt-7 text-base font-medium'>Humidity</h1>
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                      <p className='text-6xl '>{Math.round(weather.main.humidity)}</p>
                      <p className='text-4xl'>%</p>
                    </div>
                    <div className='flex justify-center items-center mt-4 '>
                      <FontAwesomeIcon icon={faLocationArrow} rotation={180} />
                      <p className='ml-2'>WSW</p>
                    </div>
                  </div>
                </div>
                <div className='todays-cards bg-primary mt-5 w-96 h-40 ml-1 d-flex 
       justify-center items-center text-center text-text'>

                  <div>
                    <div>
                      <h1 className='pt-7 text-base font-medium'>Visibility</h1>
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                      <p className='text-6xl mr-2 '>{(weather.visibility * 0.000621371).toFixed(1)} </p>
                      <p className='text-4xl'>mph</p>
                    </div>
                    <div className='flex justify-center items-center mt-4'>


                    </div>
                  </div>
                </div>
                <div className='todays-cards bg-primary mt-5 w-96 h-40 ml-1 d-flex 
       justify-center items-center text-center text-text'>

                  <div>
                    <div>
                      <h1 className='pt-7 text-base font-medium'>Air Pressure</h1>
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                      <p className='text-6xl '>{Math.round(weather.main.pressure)}</p>

                    </div>
                    <div className='flex justify-center items-center mt-4'>


                    </div>
                  </div>
                </div>



              </>
            )}


          </div>




       


        </section>
      </main>

    </div>














    //   <LocationSearch onSearch={handleSearch} />
    //   {loading && <p>Loading weather data...</p>}
    //   {weather && (
    //     <div>
    //       <h2>{weather.name}</h2>
    //       <p>Temperature: {weather.main.temp}°C</p>
    //       <p>Feels Like: {weather.main.feels_like}°C</p>
    //       <p>Humidity: {weather.main.humidity}%</p>
    //       <p>Pressure: {weather.main.pressure} mb</p>
    //       <p>Visibility: {weather.visibility} m</p>
    //       <p>Wind Speed: {weather.wind.speed} m/s</p>

    //     </div>
    //   )}
    //   {forecast && <WeatherForecast forecastData={forecast} />} 


  );
}