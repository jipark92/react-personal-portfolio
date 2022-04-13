import React from 'react'

export default function AboutMe() {
  return (
    <div className='about-me'>
      <div className='img-container'>
        <img src="https://img.icons8.com/dotty/344/name.png" alt='profile-picture'/>
      </div>
      <div className='name-container'>
        <h2>John Doe</h2>
        <h3>Software Developer</h3>
      </div>
      <div className='description'>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .</h2>
      </div>
      <div className='social-container'>
        <a href='https://t.co/2Ed6qCNfkO' target="_blank"><img src="https://img.icons8.com/external-justicon-flat-justicon/344/external-linkedin-social-media-justicon-flat-justicon.png" alt="LinkedIn" className='social-logos'/></a>
        <a href="https://github.com/norfkorean" target="_blank"><img src="https://img.icons8.com/color/344/github--v1.png" alt="GitHub" className='social-logos'/></a>
        <a href="https://twitter.com/norfkorean" target="_blank"><img src="https://img.icons8.com/stickers/344/twitter.png" alt="Twitter" className='social-logos'/></a>
        <a href="https://www.tiktok.com/@norfkorean" target="_blank"><img src="https://img.icons8.com/ios-glyphs/344/tiktok.png" alt="TikTok" className='social-logos'/></a>
        <a href="https://instagram.com/bboyji_" target="_blank"><img src="https://img.icons8.com/fluency/344/instagram-new.png" alt="Instagram" className='social-logos'/></a>
      </div>
    </div>
  )
}
