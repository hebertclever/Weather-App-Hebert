'use client'

import { useState } from 'react';
import LocationSearch from '../../components/LocationSearch';
import LocationSearchInput from '../../components/LocationSearchInput';
import WeatherForecast from '../../components/WeatherForecast';
import WeatherCard from '../../components/WeatherCard';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);  
  const [loading, setLoading] = useState(false);

  const handleSearch = async (lat, lng) => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      setWeather(data);
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

  return (
    <div>
      <h1>Weather App</h1>
      <LocationSearch onSearch={handleSearch} />
      {loading && <p>Loading weather data...</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Feels Like: {weather.main.feels_like}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Pressure: {weather.main.pressure} mb</p>
          <p>Visibility: {weather.visibility} m</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          
        </div>
      )}
      {forecast && <WeatherForecast forecastData={forecast} />}  
    </div>
  );
}