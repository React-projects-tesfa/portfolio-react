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
            <Card image={avatar} title={"Front-end"}  tools={["Javascript", "React JS", "Next js"]} description={"Creating elegant designs suited for your design theory."}/>
            <Card image={avatar} title={"Back-end "}  tools={["Django Rest Framework", "Illustrator", "figma"]} description={"Creating elegant designs suited for your design theory."}/>
            <Card image={avatar} title={"Android mobile development"}  tools={["Jetpack Compose", "Xml"]} description={"Creating elegant designs suited for your design theory."}/>
          </div>
        </section>
        <section>
          <PortfolioText />
          {/* <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <PortfolioCard image={avatar} />
            <PortfolioCard image={avatar} />
            <PortfolioCard image={avatar} />
            <PortfolioCard image={avatar} />
          </div> */}
          <PortfolioProjects />
        </section>
      </div>
    </div>
  );
}

export default App;
