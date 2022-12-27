import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'

export default function SocialMediaIcons() {
  return (
    <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
            <AiFillGithub className=" hover:-translate-y-1 hover:scale-150 hover:text-yellow-200 duration-300 cursor-pointer" />
            <AiFillLinkedin className=" hover:-translate-y-1 hover:scale-150 hover:text-blue-900 duration-300 cursor-pointer"/>
            <AiFillYoutube className=" hover:-translate-y-1 hover:scale-150 hover:text-red-700 duration-300 cursor-pointer"/>
    </div>
  )
}
