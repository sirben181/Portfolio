import React from 'react'
import { Link } from 'react-router-dom'
import Andela from '../assets/images/andela.png'
import converter from '../assets/images/converter.png'
import facebook from '../assets/images/facebook.png'
import weather from '../assets/images/weather.png'
import jsvalidation from '../assets/images/jsvalidation.png'
import passwordgen from '../assets/images/passwordgen.png'

const Projects = () => {
  return (
    <div className=" container   flex  flex-col max-w-4xl mx-10 px-4  my-5 h-100vh width-120vw bg-"  >
        <div className=" min-h-screen justify-content-center text-center color-[#000] text-3xl font-bold  h-100vh w-200vh  p-10 flex flex-col mx-20">
          <h1 className="text-3xl font-bold underline">Projects</h1>
          <div className="my-10  px-10 h-100vh width-100vh ">
            <h3 className='text-lg'>Project 1: <span>Andela clone 2021</span></h3>
             <img src={Andela} alt="" />
             <p className='text-sm'>A clone of the Andela website built with React and Tailwind CSS.</p>
             <Link className="text-lg flex hover:text-green-500"  to="/projects">Read more...</Link>
          </div>
          <div className="my-10 h-full width-full">
            <h3 className='text-lg'>Project 2: <span>length Converter</span></h3>
             <img src={converter} className=" rounded-lg h-80% width-80% "alt="" />
             <p className='text-sm'>A simple length converter that allows users to convert between different units of measurement.</p>
             </div>
          <div className="my-10 h-full width-full">
            <h3 className='text-lg'>Project 3: <span>Facebook Clone</span></h3>
            <img src={facebook} alt="" />
            <p className='text-sm'> A clone of the Facebook website built with React and Tailwind CSS. It includes features such as user authentication, posting, and commenting.</p>
          </div>
          <div className="my-10 h-full width-full">
            <h3 className='text-lg'>Project 4: <span>Weather App</span></h3>
            <img src={weather} alt="" /> 
            <p className='text-sm'>A simple weather application that displays current weather conditions and forecasts.</p>
            </div>
          <div className="my-10 h-full width-full">
            <h3 className='text-lg'>Project 5: <span>JavaScript Validation</span></h3>
            <img src={jsvalidation} alt="" />
            <p className='text-sm'>A simple JavaScript validation form that checks for valid input before submission.</p>
          </div>
          <div className="my-10 h-full width-full">
            <h3 className='text-lg'>Project 6: <span>Password Generator</span></h3> 
            <img src={passwordgen} alt="" />
            <p className='text-sm'>A simple password generator that creates strong and secure passwords based on user-defined criteria.</p>
          </div>
          
        </div>
      </div>
  )
}

export default Projects