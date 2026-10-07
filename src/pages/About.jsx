import React from 'react'

const About = () => {
  return (
    <div className=" container  bg-[#f4f4f4]block min-h-screen w-full mx-10 px-10 py-10 justify-center">
      <div className="wrapper flex flex-col h- full w-full my-10 px-10 py-10">
        {/* the first card of about us page */}
         <div className=" container  flex  flex-col max-w-4xl mx-auto px-4 py-8 my-20 h-full">
                <div className=" justify-content-center text-center color-[#000] text-3xl font-bold mb-10  bg-[F0F0F0] rounded-lg shadow-lg p-10 flex flex-col mx-20">
                  <h2>About Us</h2>
                <div className="flex flex-col justify-center items-center">
                  <div className="">

                  </div>
                </div>
              </div>
         </div>
         {/* the second card of who we are */}
         <div className=" container  flex  flex-col max-w-4xl mx-auto px-4 py-8 my-20 h-fulljustify-content-center text-center color-[#000] text-3xl font-bold mb-10 h-100vh w-200vh bg-[F0F0F0] rounded-lg shadow-lg p-10 flex flex-col mx-20 ">
             <h2>who we are</h2>
         </div>
         {/* our journey and our story */}
         <div className= " container  flex  flex-col max-w-4xl mx-auto px-4 py-8 my-20 h-fulljustify-content-center text-center color-[#000] text-3xl font-bold mb-10 h-100vh w-200vh bg-[F0F0F0] rounded-lg shadow-lg p-10 flex flex-col mx-20"> 
              <h2>
                   our journey and our story.
              </h2>
         </div>
         {/* our mission */}
         <div className="container  flex  flex-col max-w-4xl mx-auto px-4 py-8 my-20 h-fulljustify-content-center text-center color-[#000] text-3xl font-bold mb-10 h-100vh w-200vh bg-[F0F0F0] rounded-lg shadow-lg p-10 flex flex-col mx-20">
              <h2>
                  mission and purpose
              </h2>
         </div>
         {/* our team and leadership */}
         <div className="container  flex  flex-col max-w-4xl mx-auto px-4 py-8 my-20 h-fulljustify-content-center text-center color-[#000] text-3xl font-bold mb-10 h-100vh w-200vh bg-[F0F0F0] rounded-lg shadow-lg p-10 flex flex-col mx-20">

        <p>leadership and team</p>
         </div>
         <div className="container  flex  flex-col max-w-4xl mx-auto px-4 py-8 my-20 h-fulljustify-content-center text-center color-[#000] text-3xl font-bold mb-10 h-100vh w-200vh bg-[F0F0F0] rounded-lg shadow-lg p-10 flex flex-col mx-20">
              <p>contact us</p>
              <p>join us login page and register page</p>
        </div>

         </div>
    </div>
  )
}

export default About