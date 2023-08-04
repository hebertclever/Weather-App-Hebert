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
  const { date, main, weather } = forecast;

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

  const weatherDescription = weather && weather[0] && weather[0].description ? weather[0].description.toLowerCase() : "";


  console.log(weatherDescription);


  const imageSrc = weatherImageMap[weatherDescription] || HeavyCloud;

  console.log(imageSrc);

  return (
    <div className='cards-container'>
      <div className='cards-component bg-primary m-2 p-2 w-10 h-48 text-white'>
      <h3>{displayDate}</h3>
      <Image className='card-image' src={imageSrc} alt={weatherDescription} width={40} height={100} />
      <div className='temperatura-cards'>
      <p>{Math.round(main.temp_max)}°C</p>
      <p className='card-text-2 text-text2'>{Math.round(main.temp_min)}°C</p> 
      </div>
         
    </div>
    </div>
    
  );
};



export default DailyForecastCard;
