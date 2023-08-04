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

  const weatherDescription = weather && weather.description ? weather.description.toLowerCase() : "";

  const imageSrc = weatherImageMap[weatherDescription] || HeavyCloud;

  console.log(weather.description);

  return (
    <div>
      <h3>{displayDate}</h3>
      <p>{temp_max}°C</p>
      <p>{temp_min}°C</p>
      <Image src={imageSrc} alt={weatherDescription}/>
    </div>
  );
};


export default DailyForecastCard;
