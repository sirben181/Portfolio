import React from 'react'
import bgImage from '../assets/images/bg-pic.jpg'
import Profile from '../components/Profile'
import Services from './Services'
import About from './About'

const Homepage = () => {
  return (
    <div className=" container  flex  flex-col max-w-4xl mt-30 mx-auto px-4 my-5  min-h-screen h-full w-full "  >
        <div className="min-h-screen justify-content-center text-center color-[#000] text-3xl font-bold  h-100vh w-full bg-[F0F0F0] rounded-lg shadow-lg p-10 flex flex-col mx-20">
          <div className="flex flex-col h-full w-full">
              <img src={bgImage} alt=" home image not available" className="mx-auto h-full w-full object-cover rounded" />
          </div>
          <Services/> 
          
        </div>
      </div>
  )
}

export default Homepage