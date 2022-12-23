import React from 'react'
import avatar from '../imgs/avatar-nobg.png'
export default function Card({image, title,description,tools}) {
  return (
    <div className=' flex text-center flex-col items-center shadow-lg pd-10 rounded-xl my-10  dark:bg-white'>
        <img className='pt-5' width={100} height={100} src={avatar} alt="what i do card logos" />
        <h3 className='text-lg font-medium pt-8 pb-2'>{title}</h3>
        <p className='py-2'>
        {description}
        </p>
        
        <h4 className='py-4 text-teal-600'>Design tools I use</h4>
        {tools.map(toolItem => {
            return  <p className=' text-gray-800 py-1'>{toolItem}</p>
        })}
        
    </div>
  )
}
