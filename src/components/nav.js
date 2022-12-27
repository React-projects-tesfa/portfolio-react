import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function Nav({swtichMode}) {
    return (
        <>
        <nav className='py-5 mb-12 flex justify-between sticky top-0 z-50'>
            <div className='flex items-center'>
                <h1 className='text-xl font-burtons dark:text-white p-4'>Tesfatsion Shiferaw</h1>
                <p className=' text-white'>Night<BsFillMoonStarsFill onClick={swtichMode} className='flex cursor-pointer text-black dark:text-gray-500'/></p>
            </div>
            
            <ul className='flex items-center'>
              <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-800 text-white px-4 py-2 rounded ml-8' href='#'>Resume</a></li>
            </ul>
        </nav>
        </>
    )
}