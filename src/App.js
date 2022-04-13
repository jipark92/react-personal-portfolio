import React from 'react'
import RouteSwitch from './RouteSwitch'
import AboutMe from './components/aboutme/AboutMe'
import Footer from './components/Footer'
import Contacts from './components/contact/Contacts'

export default function App() {

  const [pageNumber, setPageNumber] = React.useState(0)

  const prevBtn = () => {
    const slides = document.querySelectorAll('.slide')
    if (pageNumber === 1 ){
      slides[0].scrollIntoView();
      setPageNumber(0);
    } else if ( pageNumber === 2) {
      slides[1].scrollIntoView()
      setPageNumber(1)
    }
  }

  const nextBtn = () =>{
    const slides = document.querySelectorAll('.slide')
    if (pageNumber === 0 ){
      slides[1].scrollIntoView();
      setPageNumber(1);
    } else if (pageNumber === 1) {
      slides[2].scrollIntoView()
      setPageNumber(2)
    }
  }

  

  return (
    <div className="main-container">
      <div className='slide-btn'>
        <button onClick={prevBtn}>prev</button>
        <button onClick={nextBtn}>next</button>
      </div>
      <div className='slide-container'>
        <div className="slide">
          <AboutMe/>
        </div>
        <div className='slide'>
          <RouteSwitch/>
        </div>
        <div className='slide'>
          <Contacts/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}