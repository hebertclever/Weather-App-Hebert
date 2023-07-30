import Todays from "../../components/Todays"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'


const page = () => {
  return (
    <main className="grid gap-8 sm:grid-cols-2">
    <section className='bg-primary w-screen h-screen  max-w-lg'>
      <div className="flex flex-row ">
        <button>Search for places</button>
        <FontAwesomeIcon className="w-10 my-auto" icon={faLocationCrosshairs}/>

      </div>  

    </section>

    <section className="bg-background">

    </section>
  </main>
  )
}

export default page
