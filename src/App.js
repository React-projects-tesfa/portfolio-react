import "./App.css";
import { useEffect, useState } from "react";
import Nav from "./components/nav";
import About from "./components/about";
import Card from "./components/card";
import Avatar from "./components/avatar";
import SocialMediaIcons from "./components/socialMediaIcons";
import WhatIDo from "./components/whatIDo";
import PortfolioText from "./components/portfolioText";
import PortfolioProjects from "./components/portfolioProjects";
import Contact from "./components/contact";
import hashtag from "../src/imgs/whatIdoIcons/hashtag.png";
import papers from "../src/imgs/whatIdoIcons/papers.png";
import star from "../src/imgs/whatIdoIcons/star.png";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    Aos.init({});
  }, []);

  const swtichbgMode = () => {
    console.log(darkMode);
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <Nav swtichMode={swtichbgMode} darkMode={darkMode} />
          <About />
          <SocialMediaIcons />
          <Avatar />
        </section>

        <section>
          <WhatIDo />
          <div className=" lg:flex gap-10">
            <div data-aos="fade-right" data-aos-duration="3000">
              <Card
                image={hashtag}
                title={"Front-end"}
                tools={["HTML/CSS", "Javascript", "React JS", "Django"]}
                description={
                  "Creating elegant and asthetically pleasing designs."
                }
              />
            </div>
            <div data-aos="fade-right" data-aos-duration="2000">
              <Card
                image={papers}
                title={"Back-end "}
                tools={[
                  "Nodejs",
                  "Expressjs",
                  "Mongo DB",
                  "Django Rest Framework",
                ]}
                description={
                  "Building efficient and effective backend server and database."
                }
              />
            </div>
            <div data-aos="fade-right" data-aos-duration="1000">
              <Card
                image={star}
                title={"Android mobile development"}
                tools={["Kotlin", "Java", "Jetpack Compose", "Xml"]}
                description={
                  "Building fully functional and user friendly native android apps."
                }
              />
            </div>
          </div>
        </section>
        <section>
          <PortfolioText />
          <PortfolioProjects />
        </section>
        <section>
          <Contact />
        </section>
        <footer className="mt-6">
          <span className="block text-sm text-black ml-3 sm:text-center dark:text-white">
            © 2022{" "}
            <a
              href="https://tesfatsionshiferaw.netlify.app/"
              className="hover:text-wh"
            >
              Tesfatsion Shiferaw™
            </a>
            . All Rights Reserved.
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
