import React from 'react'

const Services = () => {
  return (
    <div className=" container  text-lg h-full width-full mx-auto px-4 my-5  " >
        <div classNames="text-center mb-8">
            <h1 className="text-3xl font-bold">Our Services</h1>
            <p className="text-gray-600">We offer a wide range of services to help you achieve your business goals.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Web Development</h2>
                    <p className="text-gray-600">We build responsive and user-friendly websites using the latest technologies.</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Mobile App Development</h2>
                    <p className="text-gray-600">We create mobile applications for iOS and Android platforms that are fast and reliable.</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-bold mb-4">UI/UX Design</h2>
                    <p className="text-gray-600">We design intuitive and visually appealing user interfaces that enhance user experience </p>
                 </div>
                 </div>
         </div>
    </div>
  )
}

export default Services