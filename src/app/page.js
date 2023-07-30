import Todays from "../../components/Todays"
import Image from "next/image"
import WeatherCard from "../../components/WeatherCard"



function getData() {
  try {
    const response = await fetch('')
  }
}



const page = () => {
  return (
   <div>
    <WeatherCard />
   </div>
  )
}

export default page
