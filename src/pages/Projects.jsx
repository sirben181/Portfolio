import React from 'react'
import Andela from '../assets/images/andela.png'
import converter2 from '../assets/images/conver2.png'
import converter4 from '../assets/images/conver4.png'
import converter1 from '../assets/images/converter.png'
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
             <img src={Andela} alt="" />
          </div>
          <div className="my-10 h-full width-full">
            <img src={converter2} alt="" sizes="" srcset="" />
          </div>
          <div className="my-10 h-full width-full">
            <img src={converter4} alt="" />
             </div>
          <div className="my-10 h-full width-full">
             <img src={converter1} alt="" />
             </div>
          <div className="my-10 h-full width-full">
            <img src={facebook} alt="" />
          </div>
          <div className="my-10 h-full width-full">
            <img src={weather} alt="" /> 
            </div>
          <div className="my-10 h-full width-full">
            <img src={jsvalidation} alt="" />
          </div>
          <div className="my-10 h-full width-full">
            <img src={passwordgen} alt="" />
          </div>
          
        </div>
      </div>
  )
}

export default Projects