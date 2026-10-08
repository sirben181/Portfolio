import React from 'react'

const About = () => {
  return (
    <div className="container  bg-[#f4f4f4]block min-h-screen w-full mx-10 px-10 py-10 justify-center">
      <div className="wrapper flex flex-col h- full w-full  px-10 py-10">
        {/* the first card of about us page */}
          <div className="container  flex  flex-col max-w-4xl mx-20px px-4 py-8  h-full">
                <div className="color-[#000] text-3xl font-bold mb-10  bg-[F0F0F0] rounded-lg shadow-lg p-10 flex flex-col">
                      <h2 className="text-3xl font-bold mb-10 underline decoration-4">About Us</h2>
                  <div className="container flex flex-col justify-center items-center">
                       <div className="flex flex-col justify-center items-center">
                             <p className="text-lg text-[#000]">We are the best webdevlopment in town and fast sites
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                              Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                             </p>
                             <p className="text-lg text-[#000]">We are the best webdevlopment in town and fast sites
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                              Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                       </div>  
                  </div>
              </div>
         </div>
         {/* the second card of who we are */}
                   <div className="container  flex  flex-col max-w-4xl mx-20px px-4 py-8 my-10 h-full border-t">
                <div className="color-[#000] text-3xl font-bold mb-10  bg-[F0F0F0] rounded-lg shadow-lg p-10 flex flex-col">
                      <h2>Who we are</h2>
                  <div className="container flex flex-col justify-center items-center">
                       <div className="flex flex-col justify-center items-center">
                             <p className="text-lg text-[#000]">We are the best webdevlopment in town and fast sites
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                              Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                             </p>
                             <p className="text-lg text-[#000]">We are the best webdevlopment in town and fast sites
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                              Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                       </div>  
                  </div>
              </div>
         </div>
                {/* our mission */}
                    <div className="container  flex  flex-col max-w-4xl mx-20px px-4 py-8 my-10 h-full border-t">
                <div className="color-[#000] text-3xl font-bold mb-10  bg-[F0F0F0] rounded-lg shadow-lg p-10 flex flex-col">
                      <h2>our mission</h2>
                  <div className="container flex flex-col justify-center items-center">
                       <div className="flex flex-col justify-center items-center">
                             <p className="text-lg text-[#000]">We are the best webdevlopment in town and fast sites
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                              Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                             </p>
                             <p className="text-lg text-[#000]">We are the best webdevlopment in town and fast sites
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                              Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                       </div>  
                  </div>
              </div>
         </div>
                {/* our contacts */}
                  <div className="container  flex  flex-col max-w-4xl mx-20px px-4 py-8 my-10 h-full border-t">
                <div className="color-[#000] text-3xl font-bold mb-10  bg-[F0F0F0] rounded-lg shadow-lg p-10 flex flex-col">
                      <h2>Our Contacts</h2>
                  <div className="container flex flex-col justify-center items-center">
                       <div className="flex flex-col justify-center items-center">
                             <p className="text-lg text-[#000]">We are the best webdevlopment in town and fast sites
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                              Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                             </p>
                             <p className="text-lg text-[#000]">We are the best webdevlopment in town and fast sites
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                              Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                       </div>  
                  </div>
                  <div className="container flex  justify-center items-center px-10 py-10 mx-10">
                    <div className="flex flex-col justify-center items-center">
                          <p className="text-lg text-[#000]  ">Contact Information</p>
                          <p className="text-lg text-[#000]">Email: info@company.com</p>
                          <p className="text-lg text-[#000]">Phone: +1 (123) 456-7890</p>
                    </div>
                    <div className="flex text-lg gap-4 justify-center items-centerpx-10 py-10 mx-10 mt-4">
                      <button className="bg-[#33f033] text-[#000] px-4 py-2 rounded-lg shadow-lg hover:bg-[#0e8a0e] hover:text-white transition duration-300">LOGIN </button>
                      <button className="bg-[#33f033] text-[#000] px-4 py-2 rounded-lg shadow-lg hover:bg-[#0e8a0e] hover:text-white transition duration-300">REGISTER </button>
                    </div>
                  </div>
              </div>
         </div>
         </div>
    </div>
  )
}

export default About