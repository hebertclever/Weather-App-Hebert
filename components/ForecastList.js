  import React from 'react';
  import DailyForecastCard from './DailyForecastCard';


  const ForecastList = ({ forecasts }) => {
    let date = new Date();
    date.setDate(date.getDate() + 1); // Amanhã

    const nextFiveDaysForecast = forecasts.filter((forecast, index) => index < 5);

    return (
      <div>
        {nextFiveDaysForecast.map((forecast, index) => (
          <DailyForecastCard
            key={index}
            forecast={{
              ...forecast,
              date: index === 0 ? 'Tomorrow' : date.toDateString(),
            }}
          />
        ))}
      </div>
    );
  };

  export default ForecastList;
