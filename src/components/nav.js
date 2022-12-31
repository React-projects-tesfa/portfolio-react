import DayNightToggle from 'react-day-and-night-toggle'
import shiferawResume from '../assets/Shiferaw_resume.pdf'

export default function Nav({swtichMode, darkMode}) {
    return (
        <>
        <nav className='py-5 mb-12 flex justify-between sticky top-0 z-50'>
            <div className='flex items-center'>
                <h1 className='text-xl font-burtons dark:text-white p-4'>Tesfatsion Shiferaw</h1>
                <DayNightToggle
                    onChange={swtichMode}
                    checked={darkMode}
                    />
            </div>
            
            <ul className='flex items-center'>
              <li><a href={shiferawResume} download='Shiferaw_Resume.pdf' className=' bg-gradient-to-r from-cyan-500 to-teal-800 text-white px-4 py-2 rounded ml-8'>Resume</a></li>
            </ul>
        </nav>
        </>
    )
}