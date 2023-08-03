import React from 'react';
import Image from 'next/image';
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
  "overcast clouds": HeavyCloud // adicionado para mapear a descrição "overcast clouds"
};

const TodayForecast = ({ weather }) => {
    if (!weather || !Array.isArray(weather) || weather.length === 0) {
      return null;
    }

    const weatherItem = weather[0];
    const description = weatherItem.description.toLowerCase();
    const imageSrc = weatherImageMap[description] || HeavyCloud;

    return (
      <div>
        <Image src={imageSrc} alt={description} />
      </div>
    );
};

  

export default TodayForecast;
