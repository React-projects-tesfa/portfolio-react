import React from 'react'
import {AiTwotoneMail, AiTwotonePhone, AiOutlineSend } from 'react-icons/ai'

export default function Contact() {
  return (
    <div className='flex justify-center border border-gray-600 '>
        <div>
        <h3 className='dark:text-white text-center text-black text-4xl py-4'>Contact</h3>
        <div className='md:flex md:space-x-10 py-3'>
            <p className='dark:text-gray-50 text-black flex'><AiTwotoneMail className='text-3xl mx-1'/> tesfatsionshiferaw@bennington.edu</p>
            <p className='dark:text-gray-50 text-black flex'><AiTwotonePhone className='text-3xl'/>(802)-112-1234</p>
        </div>
        <div className='md:flex md:space-x-10 py-3'>
            <p className='dark:text-gray-50 text-black flex py-2 pb-3'>If you have any question or would like to collab, shoot me a message!</p>
        </div>
        <div>
            <form>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-300-500" placeholder="name@flowbite.com" required/>
                </div>
                <div class="mb-0">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                    <input type="text" id="password" class="bg-gray-50 border border-teal-300 text-teal-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <div className='flex justify-center'>
                    <button type="submit" class="text-teal-500 flex  focus:ring-4 my-3 focus:outline-none focus:ring-blue-300 w-full sm:w-auto px-16 py-2.5"><AiOutlineSend className='text-5xl animate-pulse hover:text-teal-200'/></button>
                </div>
            </form>

        </div>
        </div>

    </div>
  )
}
