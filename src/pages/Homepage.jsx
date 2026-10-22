import React from 'react'
import bgImage from '../assets/images/bg-pic.jpg'
import Profile from '../components/Profile'

const Homepage = () => {
  return (
    <div className=" container  flex  flex-col max-w-4xl mx-auto px-4 py-8 my-20 h-full "  >
        <div className="min-h-screen justify-content-center text-center color-[#000] text-3xl font-bold mb-10 h-100vh w-200vh bg-[F0F0F0] rounded-lg shadow-lg p-10 flex flex-col mx-20">
          <div className="flex flex-col h-full w-full">
              <img src={bgImage} alt=" home image not available" className="mx-auto h-full w-full object-cover rounded" />
          </div>
          <div className="my-10 h-full width-full"><Profile/></div>
          <div className="">projects</div>
          <div className="">A glimpse of the blog</div>
          <div className=""> glimpse of About</div>
          
        </div>
      </div>
  )
}

export default Homepage