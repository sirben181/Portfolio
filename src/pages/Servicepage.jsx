import React from 'react'
import { useLoaderData,Link,useParams } from 'react-router-dom'
const Servicepage = () => {
    const service =useLoaderData()
    const {id}=useParams()
  return (
    <div className='container  flex  flex-col max-w-4xl mt-30 mx-auto px-4 my-5  min-h-screen h-full w-full'>
        <div className="bg-white rounded-lg shadow-lg p-6  border-t border-gray-300">
                <h2 className="text-xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
        {/* <Link to={`/services/:${id}`} className="text-blue-500 hover:text-[#33f033] mt-4 block">Read more...</Link> */}
        </div>
    </div>
  )
}
const serviceLoader= async({params})=>{
const res=await fetch(`http://localhost:5000/services/${params.id}`)
const data=await res.json()
console.log('loader is running',data)
return data
}
export {Servicepage as default,serviceLoader}