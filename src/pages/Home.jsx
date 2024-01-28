import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from '../components/AboutMe';
import Projects from "../components/Projects";
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import MyPortfolio from '../components/MyPortfolio';

const Home = () => {
  return (
      <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      {/* <MyPortfolio/> */}
      <Contact />
      <Footer/>
      </>
  )
}

export default Home