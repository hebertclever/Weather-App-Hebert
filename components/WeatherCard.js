import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'

const WeatherCard = () => {
  return (
    <main className="grid gap-8 sm:grid-cols-2">
    <section className='bg-primary w-screen h-screen  max-w-lg box-border'>
      <div className="flex flex-row p-5">
        <button className="">Search for places</button>
        <FontAwesomeIcon className="w-10 ml-auto" icon={faLocationCrosshairs}/>
      </div>
      <div className="flex flex-col items-center">
      <script>

      </script>
              
      </div>  

    </section>

    <section className="bg-background">

    </section>
  </main>
  )
}

export default WeatherCard