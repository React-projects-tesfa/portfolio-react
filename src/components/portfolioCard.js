import React from 'react'
import avatar from '../imgs/avatar-nobg.png'
export default function PortfolioCard({image}) {
  return (
    <div className='basis-1/3 flex-1 bg-slate-600 rounded-lg '>
        <div className="relative bg-black">
            <img className='object-cover rounded-lg' width={'100%'} height={'100%'} layout='responsive' src={avatar} alt="portofolio project images" />
        <ul>
            <li className='absolute bottom-14 left-16 h-8 w-44 bg-gradient-to-r from-cyan-500 to-teal-800 text-center rounded md:bottom-20 md:left-36 md:h-16 md:w-80 md:pt-2 hover:to-white'>
                <a className=' text-white rounded md:text-3xl' href='#'>Live Demo</a>
            </li>
            <li className='absolute bottom-3 left-16 h-8 w-44 bg-gradient-to-r from-cyan-500 to-teal-800 text-center rounded md:bottom-2 md:left-36 md:h-16 md:w-80 md:pt-2'>
                <a className=' text-white rounded md:text-3xl' href='#'>Source code</a>
            </li>
        </ul>
        
        </div>
        <div className='flex text-center flex-col items-center'>
            <h3 className=''>Project name</h3>
            <h5 className=''>Project description</h5>
            <p>Used tools: </p>
        </div>
    </div>
  )
}