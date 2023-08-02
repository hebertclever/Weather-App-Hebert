import React from 'react';

const DailyForecastCard = ({ forecast }) => {
  const { date, temp_min, temp_max, weather } = forecast;

  return (
    <div>
      <h3>{date}</h3>
      <p>Min Temperature: {temp_min}°C</p>
      <p>Max Temperature: {temp_max}°C</p>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.description} />
    </div>
  );
};

export default DailyForecastCard;