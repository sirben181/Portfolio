import {useState, useEffect}from 'react'
import Service from '../components/Service'

const Services = ({isHome=false}) => {
const [services, setServices]=useState([])
useEffect(()=>{

    const fetchService=async()=>{
        const ApiUrl= isHome ? 'http://localhost:5000/services_limit=3' : 'http://localhost:5000/services'
        try {
            const res=await fetch(ApiUrl)
            const data=await res.json()
            console.log(data)
            setServices(data)
            console.log(services)
        } catch (error) {
           console.log('Error fetching jobs :', error) 
        }
        
    }
    fetchService()
},[])
  return (
    <div className=" container  text-lg min-h-screen width-full mx-auto px-4 my-5 py-10  justify-content-center" >
     <div className="text-center mb-8 py-10 my-10">
                    <h1 className="text-3xl font-bold my-4 py-5">Our Services</h1>
                    <p className="text-gray-600">We offer a wide range of services to help you achieve your business goals.</p>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"></div>
    {
        isHome && services.length >3 ? (services.slice(0,3).map((service)=>(
            <Service key={service.id} service={service}/>
            ))):services.map((service)=>(
              <Service  key={service.id} service={service}/>  
            ))
    }
    </div>
    </div>
   
  )
}

export default Services