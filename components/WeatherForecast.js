import React from 'react';
import DailyForecastCard from './DailyForecastCard';

const WeatherForecast = ({ forecastData }) => {
  const list = forecastData && forecastData.list ? forecastData.list : [];

  const dailyForecast = list.reduce((acc, curr) => {
    const date = new Date(curr.dt * 1000).toISOString().split('T')[0];

    if (acc[date]) {
      acc[date].temp_min = Math.min(acc[date].temp_min, curr.main.temp_min);
      acc[date].temp_max = Math.max(acc[date].temp_max, curr.main.temp_max);
      acc[date].weather = curr.weather[0];
    } else {
      acc[date] = {
        temp_min: curr.main.temp_min,
        temp_max: curr.main.temp_max,
        weather: curr.weather[0],
      };
    }

    return acc;
  }, {});

  const dailyForecastArray = Object.entries(dailyForecast).map(([date, forecast]) => ({
    date,
    ...forecast,
  }));

  return (
    <div>
      {dailyForecastArray.map((forecast, index) => (
        <DailyForecastCard key={index} forecast={forecast} />
      ))}
    </div>
  );
};

export default WeatherForecast;