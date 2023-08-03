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

  let dailyForecastArray = Object.entries(dailyForecast).map(([date, forecast]) => ({
    date,
    ...forecast,
  }));

  // Pegue a data atual
  let currentDate = new Date();
  // Formate-a para comparar com as datas na previsão
  let formattedCurrentDate = currentDate.toISOString().split('T')[0];

  // Remova a previsão do dia atual se estiver presente
  dailyForecastArray = dailyForecastArray.filter((forecast) => forecast.date !== formattedCurrentDate);

  // Limita a previsão para os próximos 5 dias
  dailyForecastArray = dailyForecastArray.slice(0, 5);

  // Formate a data para "Tomorrow" e "Sun, 7 Jun"
  dailyForecastArray = dailyForecastArray.map((forecast, index) => {
    if (index === 0) {
      return { ...forecast, date: 'Tomorrow' };
    }

    let date = new Date(forecast.date);
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    return { ...forecast, date: formattedDate };
  });

  return (
    <div>
      <div className='flex flex-row bg-primary'>

      </div>
      {dailyForecastArray.map((forecast, index) => (
        <DailyForecastCard key={index} forecast={forecast} />
      ))}
    </div>
  );
};

export default WeatherForecast;
