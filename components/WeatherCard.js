import { convertTempToFahrenheit, formatDate } from '../utils';
import weatherImages from '../weatherImages.json'

function WeatherCard({ data, index, unit }) {
  const date = new Date(data.dt * 1000);
  
  const weatherImage = weatherImages.find(image => 
    image.name.toLowerCase() === data.weather[0].main.toLowerCase()
  );

  const tempMin = unit === 'C' ? data.temp.min : convertTempToFahrenheit(data.temp.min);
  const tempMax = unit === 'C' ? data.temp.max : convertTempToFahrenheit(data.temp.max);

  return (
    <div>
      <p>{formatDate(date, index)}</p>
      {weatherImage && <img src={weatherImage.url} alt={weatherImage.name} />}
      <p>Min Temp: {tempMin}°{unit}</p>
      <p>Max Temp: {tempMax}°{unit}</p>
    </div>
  );
}

export default WeatherCard;
