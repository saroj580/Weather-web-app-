import React from 'react'
import './HourlyForcast.css'
import { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function HourlyForcast() {
    const scrollRef = useRef(null) //reference to the scrollbar container

    //Scroll Functions 
    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
     const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  return (
        <div className='relative mt-6'>
            <div ref={scrollRef} className=' flex gap-4 mx-10 py-2 overflow-x-auto scrollbar-hide' style={{scrollBehavior : 'smooth'}}>
              {/* one hour */}
              <div className='flex flex-col items-center shadow-lg bg-green-100 py-2 rounded  px-4'>
                  <p>14:00</p>
                  <img src="https://img.freepik.com/premium-photo/cloudy-weather-flat-illustration_120816-11772.jpg?semt=ais_hybrid" alt="weather-image" className='w-10 mx-auto' />
                  <p>5 °C</p>
              </div>

              <div className='flex flex-col items-center shadow-lg bg-green-100 py-2 rounded  px-4'>
                  <p>14:00</p>
                  <img src="https://img.freepik.com/premium-photo/cloudy-weather-flat-illustration_120816-11772.jpg?semt=ais_hybrid" alt="weather-image" className='w-10 mx-auto' />
                  <p>5 °C</p>
              </div>

              <div className='flex flex-col items-center shadow-lg bg-green-100 py-2 rounded  px-4'>
                  <p>14:00</p>
                  <img src="https://img.freepik.com/premium-photo/cloudy-weather-flat-illustration_120816-11772.jpg?semt=ais_hybrid" alt="weather-image" className='w-10 mx-auto' />
                  <p>5 °C</p>
              </div>

              <div className='flex flex-col items-center shadow-lg bg-green-100 py-2 rounded  px-4'>
                  <p>14:00</p>
                  <img src="https://img.freepik.com/premium-photo/cloudy-weather-flat-illustration_120816-11772.jpg?semt=ais_hybrid" alt="weather-image" className='w-10 mx-auto' />
                  <p>5 °C</p>
              </div>

              <div className='flex flex-col items-center shadow-lg bg-green-100 py-2 rounded  px-4'>
                  <p>14:00</p>
                  <img src="https://img.freepik.com/premium-photo/cloudy-weather-flat-illustration_120816-11772.jpg?semt=ais_hybrid" alt="weather-image" className='w-10 mx-auto' />
                  <p>5 °C</p>
              </div>

              <div className='flex flex-col items-center shadow-lg bg-green-100 py-2 rounded  px-4'>
                  <p>14:00</p>
                  <img src="https://img.freepik.com/premium-photo/cloudy-weather-flat-illustration_120816-11772.jpg?semt=ais_hybrid" alt="weather-image" className='w-10 mx-auto' />
                  <p>5 °C</p>
              </div>
          </div>

          {/* Scroll Button */}
          <button onClick={scrollLeft} className='absolute left-0 top-1/2 bg-green-500 w-8 h-8 flex items-center justify-center rounded-full text-white transform -translate-y-1'>
              <FaChevronLeft className='w-4 h-4' />
          </button>
          <button onClick={scrollRight} className='absolute right-0 top-1/2 bg-green-500 w-8 h-8 flex items-center justify-center rounded-full text-white transform -translate-y-1'>
              <FaChevronRight className='w-4 h-4'/>
          </button>
          
        </div>
    )
}
