import React, { useRef } from 'react';
import {AiTwotoneMail, AiTwotonePhone, AiOutlineSend } from 'react-icons/ai';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_ill38e6', 'template_fpndip8', form.current, '3wX_G_32yq5McgIlh')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='flex justify-center border border-gray-600'>
        <div className='px-10 md:px-0'>
        <h3 className='dark:text-white text-center text-black text-4xl py-4'>Contact</h3>
        <div className='md:flex md:space-x-10 py-3'>
            <p className='dark:text-gray-50 text-black flex'><AiTwotoneMail className='text-3xl mx-1'/> tesfatsionshiferaw@bennington.edu</p>
            <p className='dark:text-gray-50 text-black flex'><AiTwotonePhone className='text-3xl'/>(585)445-0901</p>
        </div>
        <div className='md:flex md:space-x-10 py-3'>
            <p className='dark:text-gray-50 text-black flex py-2 pb-3'>If you have any question or would like to collab, shoot me a message!</p>
        </div>
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="user_name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-300-500" placeholder="John Stefan" required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="user_email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-300-500" placeholder="john@flowbite.com" required/>
                </div>
                <div className="mb-0">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                    <input type="text" name='user_message' id="user_message" className="bg-gray-50 border border-teal-300 text-teal-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Your message..." required/>
                </div>
                <div className='flex justify-center'>
                    <button type='submit' className="text-teal-300 flex my-3  sm:w-auto px-16 py-2.5" href = "mailto:stesfatsionmulugeta@gmail.com?subject = portfolio message&body = Message"><AiOutlineSend className="text-5xl animate-pulse hover:text-green-400 cursor-pointer"/></button>
                </div>
            </form>

        </div>
        </div>

    </div>
  )
}
