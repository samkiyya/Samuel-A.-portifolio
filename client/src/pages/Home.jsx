import { useState } from "react";
import Hero from "./miniComponents/Hero";
import Timeline from "./miniComponents/Timeline";
import Skills from "./miniComponents/Skills";
import MyApps from "./miniComponents/MyApps";
import About from "./miniComponents/About";
import Portfolio from "./miniComponents/Portfolio";
import Contact from "./miniComponents/Contact";
import { ModeToggle } from "../components/mode-toggle"; // Mode toggle import

// Hamburger Component
const Hamburger = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`container ${isOpen ? "change" : ""}`} onClick={toggleMenu}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>

      <style jsx>{`
        .container {
          display: inline-block;
          cursor: pointer;
        }

        .bar1,
        .bar2,
        .bar3 {
          width: 35px;
          height: 5px;
          background-color: #fff;
          margin: 6px 0;
          transition: 0.4s;
        }

        .change .bar1 {
          transform: translate(0, 11px) rotate(-45deg);
        }

        .change .bar2 {
          opacity: 0;
        }

        .change .bar3 {
          transform: translate(0, -11px) rotate(45deg);
        }
      `}</style>
    </div>
  );
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Hamburger Button */}
          <div className="block md:hidden">
            <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex lg:flex space-x-4">
            <a
              href="#hero"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Home
            </a>
            <a
              href="#about"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              About Me
            </a>
            <a
              href="#timeline"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Timeline
            </a>
            <a
              href="#skills"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              My Portfolio
            </a>
            <a
              href="#apps"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              My Apps
            </a>
            <a
              href="#contact"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Contact Me
            </a>
          </div>
          {/* Mode Toggle */}
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="absolute top-16 left-0 w-full bg-gray-800 text-white px-2 pt-2 pb-3 space-y-1">
            <a
              href="#hero"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              onClick={handleLinkClick}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              onClick={handleLinkClick}
            >
              About Me
            </a>
            <a
              href="#timeline"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              onClick={handleLinkClick}
            >
              Timeline
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              onClick={handleLinkClick}
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              onClick={handleLinkClick}
            >
              My Portfolio
            </a>
            <a
              href="#apps"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              onClick={handleLinkClick}
            >
              My Apps
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              onClick={handleLinkClick}
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <article className="px-5 mt-20 sm:mt-24 md:mt-28 lg:mt-36 xl:mt-44 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
        <section id="hero">
          <Hero />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="apps">
          <MyApps />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </article>
    </>
  );
};

export default Home;
