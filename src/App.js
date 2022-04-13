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

  const increaseTextSize = () => {
    if (pageNumber === 0 ) {
      return <h3 className='title-select'><h2 Style="color:white">ABOUT ME / </h2> Skills / Contact </h3>
    } else if (pageNumber === 1 ){
      return <h3 className='title-select'>About Me<h2 Style="color:white">/ SKILLS /</h2>Contact </h3>
    } else if (pageNumber === 2 ){
      return <h3 className='title-select'>About Me / Skills<h2 Style="color:white">/ CONTACT</h2> </h3>
    }
  }

  return (
    <div className="main-container">
      <div className='slide-btn'>
        <button onClick={prevBtn}>&#8678;</button>
        <h3>{increaseTextSize()}</h3>
        <button onClick={nextBtn}>&#8680;</button>
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