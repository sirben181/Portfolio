import React from 'react'

const Contacts = () => {
  return (
    <div className="container bg-[#f4f4f4]block min-h-screen w-full mx-10 px-10 py-20 justify-center">
        <div className="wrapper flex flex-col h- full w-full  px-10 py-10">
           <h4>  Contacts forms</h4>  
           <form className="flex flex-col gap-4 bg-[#f3f3f3] h-50vh w-150">
            <label htmlFor="name">Full name:</label>
            <input className='border h-10 rounded p-5'
            type="text" 
            name='name' 
            id="name"
            placeholder="your full name"
            required
            />
            <label htmlFor="name">Email:</label>
            <input className='border h-10 rounded p-5'
            type="text" 
            name='email' 
            id="email"
            placeholder="your email"
            required
            />
            <label htmlFor="name">Your interest:</label>
            <input className='border h-10 rounded p-5'
            type="text" 
            name='interest' 
            id="interest"
            placeholder="whats your interest? e.g web development"
            required
            />
            <input type="submit"
            name="submit" 
            id="submit"
            className='border bg-[#33f033] h-10 w-40 rounded text-[#fff] text-xl hover:text-[#344f044]' />
           </form>
         </div>
    </div>
  )
}

export default Contacts