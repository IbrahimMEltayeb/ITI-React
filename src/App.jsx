import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import './App.css'


const App = () => {
  return <React.Fragment>
    <Navbar />
    <div className="hero" id='d1'>
    <Hero />
    </div>

    <div className="about_comp" id='d2'>
      <About />
    </div>

    <div className="skills_comp" id='d3'>
      <Skills />
    </div>

    <div className="projects" id='d4'>
      <Projects />
    </div>

    <div className="footer">
      <Footer />
    </div>

      

    </React.Fragment>
}

export default App;