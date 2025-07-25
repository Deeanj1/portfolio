import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import myphoto from "./assets/replace.png";
import me from "./assets/mee.png";
import pvest from "./assets/pvest.png";
import moove from "./assets/moove.png";
import yaymovies from "./assets/yaymovies.png";
import git from "./assets/git.svg";
import typescript from "./assets/typescript.svg";
import javascript from "./assets/javascript.svg";
import npm from "./assets/npm.svg";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import vscode from "./assets/vscode.svg";
import node from "./assets/nodejs.svg";
import react from "./assets/react.svg";
import mongodb from "./assets/mongodb.png";
import github from "./assets/github.png";
import tailwindcss from "./assets/taillwind.png";
import lucide from "./assets/lucide.png";
import json from "./assets/json.svg";
import { useState, useEffect } from "react";
import linkedin from "./assets/linkedin.svg";
import email from "./assets/gmail.svg";
import githubs from "./assets/github.png";
import call from "./assets/call.png";

function TechIcon({ src, alt, label }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={src}
        alt={alt}
        className="w-14 h-14 md:w-20 md:h-20 mb-2"
      />
      <span className="text-[10px] md:text-xs font-semibold text-white text-center">{label}</span>
    </div>
  );
}

function ProjectCard({ image, title, frameworks, info, github, live }) {
  return (
    <div className="bg-black/70 rounded-2xl shadow-lg p-6 flex flex-col items-center border-2 border-white">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-b-sm mb-4" />
      <h3 className="text-lg font-bold text-[#cb9260] mb-2">{title}</h3>
      <p className="text-xs text-gray-300 mb-2">{frameworks}</p>
      <p className="text-white text-center mb-4 text-sm">{info}</p>
      <div className="flex gap-2">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#cb9260] text-black px-3 py-1 rounded font-semibold hover:bg-black hover:text-[#cb9260] border border-[#cb9260] transition text-xs"
        >
          View GitHub
        </a>
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-[#cb9260] px-3 py-1 rounded font-semibold hover:bg-[#cb9260] hover:text-black border border-[#cb9260] transition text-xs"
        >
          View Project
        </a>
      </div>
    </div>
  );
}


function App() {
  const [showImage, setShowImage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowImage(true), 100);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="p-6 flex justify-between items-center max-w-6xl mx-auto sticky top-0 bg-black z-50">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => scroll.scrollToTop()}>David Anjorin</h1>
        <button className="md:hidden text-2xl text-white focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <VscChromeClose /> : <RxHamburgerMenu />}
        </button>
        <nav className="hidden md:flex space-x-4">
          <ScrollLink to="home" smooth={true} duration={500} className="hover:text-[#cb9260] cursor-pointer">Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="hover:text-[#cb9260] cursor-pointer">About</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} className="hover:text-[#cb9260] cursor-pointer">Projects</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-[#cb9260] cursor-pointer">Contact</ScrollLink>
        </nav>
        <div className={`fixed top-0 right-0 h-full w-64 bg-black/95 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-50`}>
          <div className="flex justify-end p-6">
            <button className="text-2xl text-white focus:outline-none" onClick={toggleMenu}>
              <VscChromeClose />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 mt-8">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="text-lg hover:text-[#cb9260] cursor-pointer"
              onClick={toggleMenu}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-lg hover:text-[#cb9260] cursor-pointer"
              onClick={toggleMenu}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="text-lg hover:text-[#cb9260] cursor-pointer"
              onClick={toggleMenu}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-lg hover:text-[#cb9260] cursor-pointer"
              onClick={toggleMenu}
            >
              Contact
            </ScrollLink>
          </nav>
        </div>
      </header>

      <section id="home" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-[#cb9260]">David.</span><br />
            <span className="text-base sm:text-xl md:text-3xl">Software Developer.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-8 w-full sm:w-[90%] md:w-[70%] mx-auto md:mx-0">
            A detail-oriented and creative frontend developer with a background in media and a strong foundation in modern web technologies.
          </p>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="inline-block bg-[#cb9260] hover:bg-black text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-xl shadow-md transition cursor-pointer hover:border hover:border-[#cb9260] text-sm sm:text-base"
          >
            Contact Me
          </ScrollLink>
        </div>
        <div className="mt-10 md:mt-0 flex justify-center">
          <img
            src={myphoto}
            alt="David Anjorin"
            className={`rounded-4xl shadow-lg object-cover object-center w-104 h-134 transition-transform duration-2000 ease-out ${
              showImage ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
            }`}
          />
        </div>
      </section>

      <section id="about" className="bg-[#cb9260] py-12 px-4 text-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-end">
            <img
              src={me}
              alt="David Anjorin"
              className="rounded-3xl shadow-lg object-cover w-44 h-56 md:w-104 md:h-80 max-w-full transition-transform duration-2000 ease-out"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">About Me</h2>
            <p className="text-sm md:text-xl text-white mb-4">
              I'm a frontend-focused software developer with a passion for bringing interfaces to life using modern, user-centered tools and technologies. My journey into tech began after several years in social media marketing, where I learned how people interact with content, brands, and digital experiences.
              <br /><br />
              Today, within a year and counting of experience, and working with a team on projects, I specialize in crafting clean, intuitive, and responsive web applications using tools like React, Tailwind CSS, and JavaScript and modern development tools like Vite and npm. 
              <br /><br />
              I enjoy working on interfaces that not only look good but feel right — focusing on usability, accessibility, and performance.
              <br /><br />
              Let’s build something great, and always be free to reach out 😎.
            </p>

          </div>
        </div>
      </section>

      <section className="py-12 bg-black">
        <div className="max-w-5xl mx-auto px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-[#cb9260] mb-6 text-center">Tech Skills</h2>
      <div className="
        grid
        grid-cols-4
        lg:grid-cols-7
        gap-y-8 gap-x-4
        justify-items-center
        items-center
      ">

            <TechIcon src={git} alt="Git" label="GIT" />
            <TechIcon src={typescript} alt="TypeScript" label="TYPESCRIPT" />
            <TechIcon src={javascript} alt="JavaScript" label="JAVASCRIPT" />
            <TechIcon src={npm} alt="npm" label="NPM" />
            <TechIcon src={html} alt="HTML" label="HTML" />
            <TechIcon src={css} alt="CSS" label="CSS" />
            <TechIcon src={vscode} alt="VS Code" label="VS CODE" />
            <TechIcon src={node} alt="Node.js" label="NODEJS" />
            <TechIcon src={react} alt="React" label="REACT" />
            <TechIcon src={mongodb} alt="MongoDB" label="MONGODB" />
            <TechIcon src={github} alt="GitHub" label="GITHUB" />
            <TechIcon src={tailwindcss} alt="Tailwind CSS" label="TAILWINDCSS" />
            <TechIcon src={lucide} alt="Lucide" label="LUCIDE" />
            <TechIcon src={json} alt="JSON" label="JSON" />
            <div className="col-span-2 sm:col-span-4 md:col-span-4 lg:col-span-7 flex justify-center gap-8 w-full">
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className=" relative w-full min-h-[500px] my-16">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
            style={{ position: "absolute", left: 0, top: 0 }}
          >
            <polygon points="0,0 60,0 40,100 0,100" fill="black" />
            <polygon points="60,0 100,0 100,100 40,100" fill="#cb9260" opacity="0.9" />
          </svg>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-2">
          <h2 className="text-3xl font-bold text-white mb-6">Some Notable Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            <ProjectCard
              image={pvest}
              title="Piggyvest Clone"
              frameworks="Javascript, React, Tailwind CSS"
              info="An almost exact clone of one of the popular investment and savings app."
              github="https://github.com/Deeanj1/pvest"
              live="https://pvest-4uad.vercel.app/" 
            />
            <ProjectCard
              image={moove}
              title="MOOVE Landing Page clone"
              frameworks="HTML, CSS"
              info="A landing page clone for the soonicorn Moove, featuring smooth scroll and responsive design."
              github="https://github.com/Deeanj1/moove"
              live="https://moove-alpha.vercel.app/"
            />
            <ProjectCard
              image={yaymovies}
              title="Yay-Movies website"
              frameworks="Javascript, React, Tailwind CSS"
              info="A simple user friendly website for latest movies, updated each day."
              github="https://github.com/Deeanj1/yay-movies/"
              live="https://yay-movies.vercel.app/"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black py-20 px-6 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-300 mb-8">Feel free to reach out for collaborations or just a friendly chat.</p>

    <div className="mt-8 flex justify-center gap-6 text-white">
            <a href="https://github.com/Deeanj1/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-[#cb9260]">
              <img src={githubs} alt="GitHub" className="w-10 h-10 mb-2" />
              <span className="text-[10px] md:text-xs font-semibold">GitHub</span>
            </a>
          <a href="tel:+2348061419152" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-[#cb9260]">
          <img src={call} alt="Phone" className="w-10 h-10 mb-2" />
          <span className="text-[10px] md:text-xs font-semibold">Phone</span>
          </a>
            <a href="https://www.linkedin.com/in/davidanjorin" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-[#cb9260]">
              <img src={linkedin} alt="LinkedIn" className="w-10 h-10 mb-2" />
              <span className="text-[10px] md:text-xs font-semibold">LinkedIn</span>
            </a>
            <a href="mailTo:deeanj2003@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-[#cb9260]">
              <img src={email} alt="Email" className="w-10 h-10 mb-2" />
              <span className="text-[10px] md:text-xs font-semibold">Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;