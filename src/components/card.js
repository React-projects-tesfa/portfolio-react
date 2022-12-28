import React from 'react'

export default function Card({image, title,description,tools}) {
  return (
    <div className=' flex text-center flex-col items-center shadow-lg pd-10 rounded-xl my-10 hover:-translate-y-1 hover:scale-110 duration-300  dark:bg-gray-400 dark:shadow-teal-700'>
        <img className='pt-5' width={100} height={100} src={image} alt="what i do card logos" />
        <h3 className='font-medium pt-8 pb-2 text-2xl'>{title}</h3>
        <p className='py-2'>
        {description}
        </p>
        
        <h4 className='py-4 text-teal-900'>Design tools I use</h4>
        {tools.map((toolItem, index )=> {
            return  <p key={index} className=' text-gray-800 py-1'>{toolItem}</p>
        })}
        
    </div>
  )
}
