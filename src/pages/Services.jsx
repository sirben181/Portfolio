import {useState, useEffect}from 'react'
import { Link } from 'react-router-dom'

const Services = ({isHome=false}) => {
const [services, setServices]=useState([])
useEffect(()=>{

    const fetchService=async()=>{
        const ApiUrl= isHome ? 'http://localhost:5000/services_limit=3' : 'http://localhost:5000/services'
        try {
            const res=await fetch(ApiUrl)
            const data=await res.json()
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
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        <div className="bg-white rounded-lg shadow-lg p-6  border-t border-gray-300">
                            <h2 className="text-xl font-bold mb-4">Websites & Digital Presence</h2>
                            <p className="text-gray-600">Web development, WordPress websites, landing pages and website improvements</p>
                            <Link to="/services/web-development/1" className="text-blue-500 hover:text-[#33f033] mt-4 block">Read more...</Link>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6  border-t border-gray-300">
                            <h2 className="text-xl font-bold mb-4">Data analysis</h2>
                            <p className="text-gray-600">We analyze data to provide insights and support decision-making.</p>
                            <Link to="/services/data-analysis/2" className="text-blue-500 hover:text-[#33f033] mt-4 block">Read more...</Link>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6  border-t border-gray-300">
                            <h2 className="text-xl font-bold mb-4">Web support and Maintenance</h2>
                            <p className="text-gray-600">We provide ongoing support and maintenance for your websites to ensure they perform at their best.</p>
                            <Link to="/services/web-support-maintenance/3" className="text-blue-500 hover:text-[#33f033] mt-4 block">Read more...</Link>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6  border-t border-gray-300">
                            <h2 className="text-xl font-bold mb-4">Digital Marketing & Advertising</h2>
                            <p className="text-gray-600">Google Ads, Meta Ads, campaign reporting and conversion-focused landing pages.</p>
                            <Link to="/services/google-meta-ads/4" className="text-blue-500 hover:text-[#33f033] mt-4 block">Read more...</Link>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6  border-t border-gray-300">
                            <h2 className="text-xl font-bold mb-4">AI optimization</h2>
                            <p className="text-gray-600">We leverage AI technologies to optimize your digital presence and improve performance.</p>
                            <Link to="/services/ai-optimization/5" className="text-blue-500 hover:text-[#33f033] mt-4 block">Read more...</Link>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6  border-t border-gray-300">
                            <h2 className="text-xl font-bold mb-4">Productivity & Technical Content</h2>
                            <p className="text-gray-600">Google Workspace and Spaces, technical writing, user guides and business process documentation.</p>
                            <Link to="/services/productivity-technical-content/6" className="text-blue-500 hover:text-[#33f033] mt-4 block">Read more...</Link>
                        </div>
                 </div>
                 <div className="text-center mt-4 border-t border-gray-300 rounded-lg shadow-lg pt-4">
                    <h3>Have a project in mind?</h3>
                <p className="text-gray-600">Contact us today to discuss your project and how we can help you achieve your goals.</p>
                <Link to="/contacts" className="text-blue-500 hover:text-[#33f033] my-4 block pb-10 ">Contact us</Link>
                 </div>

         </div>
    </div>
  )
}

export default Services