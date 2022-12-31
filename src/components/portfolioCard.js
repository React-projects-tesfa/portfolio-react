import React from 'react'
import {AiFillGithub, AiFillPlayCircle, AiFillVideoCamera} from 'react-icons/ai'
import avatar from '../imgs/avatar-nobg.png'
export default function PortfolioCard({name, description, githubLink, liveDemoAvailable, demoLink, image}) {
  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-md transition-shadow hover:shadow-xl hover:shadow-dark/30">
      <div className="project-card">
        <img className=" h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125 " src={image} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white">{name}</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{description}</p>
        <a href={githubLink} className="rounded-full bg-neutral-700 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-teal-50/60 hover:shadow-white"><AiFillGithub/></a>
        {liveDemoAvailable ? 
        <a href={demoLink} className="rounded-full bg-neutral-700 py-2 mt-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-teal-50/60 hover:shadow-white "><AiFillPlayCircle/></a>:
        <a href={demoLink} className="rounded-full bg-neutral-700 py-2 mt-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-teal-50/60 hover:shadow-white "><AiFillVideoCamera/></a>
        }
      </div>
    </div>
  )
}