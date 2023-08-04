  import React from 'react';
  import DailyForecastCard from './DailyForecastCard';


  const ForecastList = ({ forecasts }) => {

    console.log(forecasts);
  
    const nextFiveDaysForecast = forecasts.filter((forecast, index) => index < 5);
  
    return (
      <div>
        {nextFiveDaysForecast.map((forecast, index) => {
          const date = new Date();
          date.setDate(date.getDate() + index + 1); // Aumentar 1 dia a partir de hoje para cada previsão
          return (
            <DailyForecastCard
              key={index}
              forecast={{
                ...forecast,
                date: index === 0 ? 'Tomorrow' : date.toDateString(),
              }}
            />
          );
        })}
      </div>
    );
  };
  
  export default ForecastList;
  
