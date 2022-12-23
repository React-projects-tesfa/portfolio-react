import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function Nav({swtichMode}) {
    return (
        <>
        <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>Tesfatsion Shiferaw</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={swtichMode} className='flex cursor-pointer dark:text-white'/></li>
              <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-800 text-white px-4 py-2 rounded ml-8' href='#'>Resume</a></li>
            </ul>
        </nav>
        </>
    )
}