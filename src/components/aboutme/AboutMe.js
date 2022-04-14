import React from 'react'

export default function AboutMe() {
  return (
    <div className='about-me'>
      <div className='img-container'>
        <img src="https://img.icons8.com/dotty/344/name.png" alt='profile-pictures'/>
      </div>
      <div className='name-container'>
        <h2>John Doe</h2>
        <h3>Software Developer</h3>
      </div>
      <div className='description'>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.</h2>
      </div>
    </div>
  )
}