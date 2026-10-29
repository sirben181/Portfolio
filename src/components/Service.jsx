import React from 'react'
import { useLoaderData,Link,useParams } from 'react-router-dom'

const Service = ({service}) => {
    
    // console.log(service)
  return (
    <div>    
        <div className="bg-white rounded-lg shadow-lg p-6  border-t border-gray-300">
                <h2 className="text-xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
        <Link to={`/services/:${service.id}`} className="text-blue-500 hover:text-[#33f033] mt-4 block">Read more...</Link>
        </div>
                    {/* <div className="bg-white rounded-lg shadow-lg p-6  border-t border-gray-300">
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
            */}

         </div>
        
  )
}


export   default Service