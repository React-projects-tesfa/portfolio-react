import React from 'react'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'

export default function SocialMediaIcons() {
  return (
    <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
            <AiFillTwitterCircle className=" hover:-translate-y-1 hover:scale-110 hover:text-sky-600 duration-300" />
            <AiFillLinkedin className=" hover:-translate-y-1 hover:scale-110 hover:text-blue-600 duration-300"/>
            <AiFillYoutube className=" hover:-translate-y-1 hover:scale-110 hover:text-red-700 duration-300"/>
    </div>
  )
}
