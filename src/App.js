import React from 'react'
import RouteSwitch from './RouteSwitch'
import AboutMe from './components/aboutme/AboutMe'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="main-container">
      <div className='slide-container'>
        <div className="about-me-container">
          <AboutMe/>
        </div>
        <div className='router-container'>
          <RouteSwitch/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}