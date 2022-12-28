import './App.css';
import { useState } from 'react';
import Nav from './components/nav'
import About from './components/about'
import Card from './components/card'
import Avatar from './components/avatar'
import SocialMediaIcons from './components/socialMediaIcons'
import WhatIDo from './components/whatIDo'
import PortfolioText from './components/portfolioText';
import avatar from './imgs/avatar.jpg';
import PortfolioProjects from './components/portfolioProjects'
import hashtag from '../src/imgs/whatIdoIcons/hashtag.png'
import papers from '../src/imgs/whatIdoIcons/papers.png'
import star from '../src/imgs/whatIdoIcons/star.png'

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const swtichbgMode = () =>{
    console.log(darkMode)
    setDarkMode(!darkMode)
  }
  return (
    <div className={darkMode ? 'dark': ""}>
      <div className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <Nav swtichMode = {swtichbgMode}/>        
          <About />
          <SocialMediaIcons />
          <Avatar />
        </section>

        <section>
          <WhatIDo />
          <div className=' lg:flex gap-10'>
            <Card image={hashtag} title={"Front-end"}  tools={["Javascript", "React JS", "Next js"]} description={"Creating elegant designs suited for your design theory."}/>
            <Card image={papers} title={"Back-end "}  tools={["Django Rest Framework", "Illustrator", "figma"]} description={"Creating elegant designs suited for your design theory."}/>
            <Card image={star} title={"Android mobile development"}  tools={["Jetpack Compose", "Xml"]} description={"Creating elegant designs suited for your design theory."}/>
          </div>
        </section>
        <section>
          <PortfolioText />
          <PortfolioProjects/>
        </section>
        <footer>
        <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
        <span className="block text-sm text-white ml-3 sm:text-center ">© 2022 <a href="https://tesfatsionshiferaw.netlify.app/" className="hover:text-wh">Tesfatsion Shiferaw™</a>. All Rights Reserved.
        </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
