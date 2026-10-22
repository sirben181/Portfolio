// import Avatar from '@mui/material/Avatar'
import React from 'react'
import { Link } from 'react-router-dom'
import prof from '../assets/images/bens.webp'
// import { FontAwesomeIcon } from 'react-icons/fa'
const Profile = () => {
  return (
    <div className='bg-[#C7BFF5] rounded-lg shadow-lg p-10 flex flex-col mx-20 text-xl widht-full'>
        <div className="">
            <div className="">
                <div className="flex flex-row items-center justify-center">
                    {/* <FontAwesomeIcon  src={prof}/> */}
                    {/* <i style={{height:'100px', width:'100px', marginRight:'30px'}} src={prof}/> */}
                    <span className="flex  items-center">
                        <h3 className='text-white font-bold'>Benson kamau</h3>
                        <span className=''> - </span>
                        <p>Software developer</p>
                    </span>
                </div>
                <div className="">
                    <div className=''>
                        <h3>who is ben?</h3>
                    </div>
                    <div className="">
                       <p>
                        i started coding in the covid era june of 2021.Having worked in the constructio industry for <br />
                         some times after graduating from college having a bachelor degree in biochemistry. <br />
                         here is the best thing that has ever happened to my life. got into my passion <br />
                          something that i just wish i would have started early.
                          i was working in construction when i decided to do something that was in my <br />
                           mind for so long.
                           So i just started to do what i felt like i doing and wanted to do for so long. <br />
                            I quitted the job i was doing at the time and i had to starting to learn what the hell is coding.
                            i started running just like othjer guys do with html,css and js and then frameworks and a few databases.
                        
                        </p> 
                        </div>
                        <div className=''>
                            <h3>Technologies and skills</h3>
                            <div className='skills'>
                                <ul>
                                    <li>Reactjs</li>
                                    <li>Javascript</li>
                                    <li>Nodejs</li>
                                    <li>Express</li> 
                                    <li>MongoDB</li>
                                    <li>Firebase</li>
                                </ul>
                                </div>

                    </div>
                </div>
                <p className='hitmeup'> <Link className='text-[#fff] text-bold hover:text-blue' rel="noreferrer" to='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQHcsRdSRmXtNpZgQQPKCTBtvnXJkXvpjqtDxXtKggNrlrpwsQvNVVTbbCqXdMdSfqFxl' target='_blank'>Hire</Link></p>

            </div>
        </div>
      
    </div>
  )
}

export default Profile
