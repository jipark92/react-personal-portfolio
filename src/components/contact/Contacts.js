import React from 'react'

export default function Contacts() {
    return (
        <div className='contact-container'>
            <div className='social-container'>
                <a href='https://t.co/2Ed6qCNfkO' target="_blank"rel="noreferrer"><img src="https://img.icons8.com/external-justicon-flat-justicon/344/external-linkedin-social-media-justicon-flat-justicon.png" alt="LinkedIn" className='social-logos'/></a>
                <a href="https://github.com/norfkorean" target="_blank"rel="noreferrer"><img src="https://img.icons8.com/color/344/github--v1.png" alt="GitHub" className='social-logos'/></a>
                <a href="https://twitter.com/norfkorean" target="_blank"rel="noreferrer"><img src="https://img.icons8.com/stickers/344/twitter.png" alt="Twitter" className='social-logos'/></a>
                <a href="https://www.tiktok.com/@norfkorean" target="_blank"rel="noreferrer"><img src="https://img.icons8.com/ios-glyphs/344/tiktok.png" alt="TikTok" className='social-logos'/></a>
                <a href="https://instagram.com/bboyji_" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluency/344/instagram-new.png" alt="Instagram" className='social-logos'/></a>
            </div>
            <div className='information-container'>
                <div className='phone'>
                    <img src="https://img.icons8.com/ios-filled/344/phone.png"/>
                    <p>555-555-555</p>
                </div>

                <div className='address-container'>
                    <div className='-addresslogo-container'>
                        <img src="https://img.icons8.com/ios-filled/344/address--v1.png"/>
                    </div>
                    <div className='address'>
                        <p>1234 Test Street</p>
                        <p>city, state, 12345</p>
                    </div>
                </div>

                <div className='email-container'>
                <br></br>
                    <img src="https://img.icons8.com/ios-filled/344/email-open.png"/>
                    <p>example@testing.com</p>
                </div>
            </div>
        </div>
    )
}