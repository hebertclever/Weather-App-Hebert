
export function convertSpeedToMPH(speed) {
    return speed * 2.237;
  }
  
  export function convertTempToFahrenheit(temp) {
    return temp * 9 / 5 + 32;
  }
  
  export function formatDate(date, index) {
    if (index === 1) {
      return "Tomorrow";
    }
    
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }
  