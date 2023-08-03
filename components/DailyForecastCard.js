import React from 'react';
import Image from 'next/image';
import { format, isTomorrow, parseISO } from 'date-fns';
import Hail from '../images/Hail.png';
import Clear from '../images/Clear.png';
import HeavyCloud from '../images/HeavyCloud.png';
import HeavyRain from '../images/HeavyRain.png';
import LightCloud from '../images/LightCloud.png';
import LightRain from '../images/LightRain.png';
import Shower from '../images/Shower.png';
import Sleet from '../images/Sleet.png';
import Snow from '../images/Snow.png';
import Thunderstorm from '../images/Thunderstorm.png';


const weatherImageMap = {
  "clear sky": Clear,
  "hail": Hail,
  "heavy cloud": HeavyCloud,
  "heavy rain": HeavyRain,
  "light cloud": LightCloud,
  "light rain": LightRain,
  "shower": Shower,
  "sleet": Sleet,
  "snow": Snow,
  "thunderstorm": Thunderstorm,
}



const DailyForecastCard = ({ forecast, index }) => {
  const { date, temp_min, temp_max, weather } = forecast;

  function toPascalCase(string) {
    return string.match(/\w+/g)
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      })
      .join('');
  }

  let displayDate;

  let dateObject;
  if (date === "Tomorrow") {
    dateObject = new Date();
    dateObject.setDate(dateObject.getDate() + 1);
    displayDate = date;
  } else {
    dateObject = new Date(date);
    // formato da data "EEE, d MMM" formato (e.g., "Sun, 7 Jun")
    displayDate = format(dateObject, 'EEE, d MMM');
  }

  const weatherDescription = toPascalCase(weather.description);
  const imageSrc = weatherImageMap[weatherDescription] || HeavyCloud;

  console.log(weather.description);

  return (
    <div>
      <h3>{displayDate}</h3>
      <p>Min Temperature: {temp_min}°C</p>
      <p>Max Temperature: {temp_max}°C</p>
      <Image src={imageSrc} alt={weatherDescription}/>
    </div>
  );
};


export default DailyForecastCard;
