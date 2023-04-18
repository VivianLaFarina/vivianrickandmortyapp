import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './helpers/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'





function App() {
  const [location, setLocation] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.locationId.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))

  }

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`


    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))


  }, [])

  return (

    <div className=" App font-['Fira_Code'] text-white bg-cover bg-no-repeat bg-[url(/images/bg.jpg)]  py-4 min-h-screen">
      <header className="flex flex-col items-center mb-2 gap-2">
        <div className='-translate-y-[50%]'>
          <img src="/images/portal.png" className='animate-spin-portal w-[300px] lg:w-[450px]' alt="" />
        </div>
        <div className='-translate-y-[280%] flex justify-center w-[350px] lg:w-[500px]'>
          <img src="/images/name.png" alt="" className='animate-pulse' />

        </div>
        <form onSubmit={handleSubmit} className=" -translate-y-[100%]">
        <div className="flex-col  h-[50px] border-[2px] border-green-500 sm:w-[500px] w-auto mx-2">
          <input className="w-[65%] pl-4 solid h-full bg-transparent text-white font-bold " id='locationId' placeholder="Type a location Id.."   type="" />
          <button className="border-[2px] border-green-500 h-full w-[35%] bg-green-400/50 text-green-300 text-bold items-center "> Search <i className=' text-white text-xl  hover:bg-dark-green  bx bx-search -translate-y-[-25%] '></i></button>
        </div>
        <h2 className=" font-['Fira_Code']  text-green-500 text-3xl mt-16 text-center">¡ Welcome to the crazy universe !</h2>
      </form>


        <Location location={location} />
        <ResidentList location={location} />
      </header >

    </div >


  )
}

export default App
