import React from 'react'

const Blog = () => {
  return (
    <div className=" container  flex  flex-col max-w-4xl mx-auto px-4 py-8 my-20 h-full "  >
        <div className=" min-h-screen justify-content-center text-center color-[#000] text-3xl font-bold mb-10 h-100vh w-200vh bg-[F0F0F0] rounded-lg shadow-lg p-10 flex flex-col mx-20">
          <div className="flex-1">
            <div className=""> 
                <h2> THE AMAZING JOB OF JAVASCRIPT UNDER THE HOOD</h2>
                 <p className="">By John Doe</p>
            </div>
            <div className="flex-1">
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                </p>
            </div>
            <div className="flex-1">
                     <button className="bg-[#33f033] text-[#000] px-4 py-2 mx-4 rounded-lg shadow-lg hover:bg-[#0e8a0e] hover:text-white transition duration-300">comment </button>
                      <button className="bg-[#33f033] text-[#000] px-4 py-2 mx-4 rounded-lg shadow-lg hover:bg-[#0e8a0e] hover:text-white transition duration-300">like </button>
            </div>

          
          </div>
        </div>
      </div>
  )
}

export default Blog