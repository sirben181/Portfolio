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
    <div className='container bg-green-550 bg--100'>
      <div className="navbar">
          <div className="menu">
             <div className="menubars">
               <Link to='#' onClick={()=>showSidebar()}>
                 <AiIcons.AiOutlineMenu className='menu-icon'  />
               </Link>
            </div>
            <div className="navmenu">
               <ul className="nav-menu-lists">
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