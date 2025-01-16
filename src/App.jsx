import React from 'react'
import {FaMapMarkerAlt, FaSearch} from 'react-icons/fa'
import HourlyForcast from './component/HourlyForcast'

export default function App() {
  return (
    <div className='bg-green-100 min-h-screen flex items-center justify-center'>
      {/* card  */}
      <div className='bg-white shadow-lg mt-10 p-4 w-full rounded max-w-sm'>
        <div className='flex'>
          {/* input field and search button */}
          <div className='flex border rounded items-center px-2 py-2 w-full'>
            <FaSearch className='w-5 h-5'/>
            <input type="text" placeholder='Enter a city name' className='pl-2 border-none focus:outline-none w-full ' />
          </div>

          {/* current location button */}
          <button className='px-4 py-2 bg-green-500 ml-2 rounded text-white hover:bg-green-600'>
            <FaMapMarkerAlt className='w-5 h-5' />
          </button>
        </div>
        {/* Weather Data Display */}
        <div className='mt-4 text-center'>
          <h2 className='text-xl font-semibold'>
            Madrid
          </h2>
          {/* Weather Icon */}
          <img src="https://img.freepik.com/premium-photo/cloudy-weather-flat-illustration_120816-11772.jpg?semt=ais_hybrid" alt="weather-image" className='mx-auto h-40'/>
          <p className='text-lg font-semibold'>
            2 °C
          </p>
          <p className='text-sm capitalize font-semibold'>
            Cloudy
          </p>
          {/* Hourly forcast */}
          <HourlyForcast />
        </div>
      </div>
    </div>
  )
}
