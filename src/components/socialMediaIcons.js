import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

export default function SocialMediaIcons() {
  return (
    <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
            <a href='https://github.com/tesfa-eth'><AiFillGithub className=" hover:-translate-y-1 hover:scale-150 duration-300 cursor-pointer text-black  dark:text-white hover:text-teal-700 dark:hover:text-teal-400" /></a>
            <a href='https://www.linkedin.com/in/tesfatsion-shiferaw/'><AiFillLinkedin className=" hover:-translate-y-1 hover:scale-150 hover:bg-blue-900 hover:text-white text-blue-900 dark:text-gray-50 text-blue-900 duration-300 cursor-pointer"/></a>
    </div>
  )
}
