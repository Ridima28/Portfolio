import { Navbar } from "./components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skill";
// import Project from './components/Project';
import  Contact  from './components/Contact';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
  }, []);

  return (
    <div className="bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      {/* <Project/> */}
      <Contact/>
    </div>
  );
};

export default App;