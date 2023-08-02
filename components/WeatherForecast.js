import React from 'react';

const WeatherForecast = ({ forecastData }) => {
  return (
    <div>
      {forecastData.map((forecast, index) => (
        <div key={index}>
          <h3>{new Date(forecast.dt * 1000).toLocaleString()}</h3>
          <p>Temperature: {forecast.main.temp}°C</p>
          <p>Feels Like: {forecast.main.feels_like}°C</p>
          <p>Humidity: {forecast.main.humidity}%</p>
          <p>Pressure: {forecast.main.pressure} hPa</p>
          <p>Wind Speed: {forecast.wind.speed} m/s</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
