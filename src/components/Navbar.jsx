import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import {SidebarData} from '../components/Sidebar'

const Navbar = () => {
  const[sidebar,setSidebar]=useState(false)
  const showSidebar=()=>{
    setSidebar(!sidebar)
  }
  return (
    <div className='container bg-[#33f033] fixed top-0 left-0 z-10 flex flex-col w-full h-[80px]  w-full min-w-screen '>
      <div className="mx-auto  flex flex-col md:block">
          <div className="flex  justify-between items-center">
             <div className="menubars">
               <Link to='#' onClick={()=>showSidebar()}>
                 <AiIcons.AiOutlineMenu className='menu-icon'  />
               </Link>
            </div>
            <div className="block">
               <ul className="block">
                 {SidebarData.map((item,index)=>{
                      return(
                      <li key={index}>
                          <Link to={item.path}> {item.icon} <span>{item.title}</span></Link>
                      </li>)
                      })
                    }
               </ul>
            </div>

          </div>
          <div className={sidebar ? 'nav-menu active':'nav-menu'}>
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
          </div>
      </div>
    
    </div>
    
  )
}

export default Navbar