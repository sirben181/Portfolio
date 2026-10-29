import React from 'react'
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layouts/MainLayout'
import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import About from './pages/About'
import ServicePage, { serviceLoader }  from './pages/Servicepage'
import Services from './pages/Services'
import Contacts  from './pages/Contacts'
const App = () => {
  
  const routes=createRoutesFromElements(

    <>
    <Route path='/' element={<Layout />}>
    <Route index element={<Homepage />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='/about' element={<About />} />
    <Route path='/services' element={<Services />} />
    <Route path='/services/:id' element={<ServicePage /> } loader={ serviceLoader }/>
    <Route path='/contacts' element={<Contacts />} />
    </Route>
    </>
  )
  const router=createBrowserRouter(routes)
  return (
<RouterProvider router={router} />
  )
}

export default App


