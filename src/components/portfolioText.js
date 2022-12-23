import React from 'react'
import SubTitle from './subTitle';

export default function PortfolioText() {
  return (
    <div>
        <SubTitle subTitle="Portfolio" />
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
            Since the beginning of my journey as a a developer, I've done
            a remote work for <span className=' text-teal-500'>agencies </span>
            and consulted <span className=' text text-teal-500'> startups </span>
            and collaborated with talented people to creat for bussiness and consumer use.
        </p>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
            I offer from a wide range of services, including programming and teaching
        </p>
    </div>
  )
}