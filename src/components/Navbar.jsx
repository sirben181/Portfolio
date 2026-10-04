import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import {SidebarData} from '../components/Sidebar'

const Navbar = () => {
  const[sidebar,setSidebar]=useState(false)
  const showSidebar=()=>{
    setSidebar(!sidebar)
    console.log('menubar clicked')
  }
  return (
    <div className='container bg-[#33f033]  fixed top-0 left-0 z-10 flex flex-col w-full h-[100px]  w-full min-w-screen
    text-sm md:text-lg lg:text-xl xl:text-2xl  '>
      <div className="flex justify-center items-center">
          <div className="flex  justify-between items-center">
             {/* <div className="hidden xl:block">
               <Link to='#' onClick={()=>showSidebar()}>
                 <AiIcons.AiOutlineMenu className='menu-icon'  />
               </Link> 
            </div> */}
            <div className="flex justify-items items-center sm:px-1 sm:py-1 sm:gap-1 sm:mx-1 sm:my-1 md:px-2 md:py-1 md:gap-3 lg:px-4 lg:py-2 lg:gap-4 xl:px-5 xl:py-2 xl:gap-5">
               <ul className="flex justify-center items-center sm:px-1 sm:py-1 sm:gap-1 sm:mx-1 md:px-2 md:py-1 md:gap-3 lg:px-4 lg:py-2 lg:gap-4 xl:px-5 xl:py-2 xl:gap-5">
                 {SidebarData.map((item,index)=>{
                      return(
                      <li key={index} className="flex justify-center items-center gap-4 px-4 py-2 rounded-lg hover:bg-[#0e8a0e] hover:text-white
                      sm:px-1 sm:py-1 sm:gap-1 sm:mx-1 md:px-2 md:py-1 md:gap-3 lg:px-4 lg:py-2 lg:gap-4 xl:px-5 xl:py-2 xl:gap-5">
                          <Link to={item.path}> {item.icon} <span>{item.title}</span></Link>
                      </li>
                      )
                      })
                    }
               </ul>
            </div>

          </div>
          {/* <div className={sidebar ? 'nav-menu active':'nav-menu'}>
               <ul className="sidebar-icon">
                    <li>
                      <Link to='#'  onClick={()=>setSidebar(!sidebar)}>
                          <AiIcons.AiOutlineClose className="menu-icon close"/>
                      </Link>
                    </li>
                     {SidebarData.map((item,index)=>{
                      return(
                      <li key={index}  onClick={()=>setSidebar(!sidebar)} className='sidebar-lists'>
                          <Link to={item.path}> {item.icon} <span>{item.title}</span></Link>
                      </li>)
                    })}
                </ul>
          </div> */}
      </div>
    
    </div>
    
  )
}

export default Navbar