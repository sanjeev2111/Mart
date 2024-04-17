import './Footer.css'
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

import React from 'react'

const Footer = () => {

const date = new Date().getFullYear();

  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt='img2'></img>
            <p>SANJEEV MART</p>
        </div>
        <ul className='footer-links'>
<li>Company</li>
<li>Products</li>
<li>Offices</li>
<li>About</li>
<li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={instagram_icon} alt='img5'></img>
            </div>
            <div className='footer-icons-container'>
                <img src={pintester_icon} alt='img6'></img>
            </div>
            <div className='footer-icons-container'>
                <img src={whatsapp_icon} alt='img8'></img>
            </div>

        </div>
        <div className='footer-copyright'>
            <hr />
            <p>
                Copyright @ {date}
            </p>
        </div>
    </div>
  )
}

export default Footer
