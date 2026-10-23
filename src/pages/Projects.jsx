import React from 'react'
import Andela from '../assets/images/andela.png'
import converter from '../assets/images/converter.png'
import facebook from '../assets/images/facebook.png'
import weather from '../assets/images/weather.png'
import jsvalidation from '../assets/images/jsvalidation.png'
import passwordgen from '../assets/images/passwordgen.png'

const Projects = () => {
  return (
    <div className=" container  flex  flex-col max-w-4xl mx-auto px-4 py-8 my-20 h-full "  >
        <div className=" min-h-screen justify-content-center text-center color-[#000] text-3xl font-bold mb-10 h-100vh w-200vh bg-[F0F0F0] rounded-lg shadow-lg p-10 flex flex-col mx-20">
          <h1>Projects</h1>
          <div className="my-10 h-100vh width-full">
            <h3>Project 1: <span>Andela clone 2021</span></h3>
             <img src={Andela} alt="" />
          </div>
          <div className="my-10 h-full width-full">
            <h3>Project 2: <span>length Converter</span></h3>
             <img src={converter} alt="" />
             </div>
          <div className="my-10 h-full width-full">
            <h3>Project 3: <span>Facebook Clone</span></h3>
            <img src={facebook} alt="" />
          </div>
          <div className="my-10 h-full width-full">
            <h3>Project 4: <span>Weather App</span></h3>
            <img src={weather} alt="" /> 
            </div>
          <div className="my-10 h-full width-full">
            <h3>Project 5: <span>JavaScript Validation</span></h3>
            <img src={jsvalidation} alt="" />
          </div>
          <div className="my-10 h-full width-full">
            <h3>Project 6: <span>Password Generator</span></h3> 
            <img src={passwordgen} alt="" />
          </div>
          
        </div>
      </div>
  )
}

export default Projects