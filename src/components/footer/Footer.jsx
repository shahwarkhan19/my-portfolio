import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = ({faceBookLink,instagramLink,twitterLink}) => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Shahwar Khan</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href={faceBookLink}><FaFacebookF/></a>
        <a href={instagramLink}><FiInstagram/></a>
        <a href={twitterLink}><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Shahwar Khan. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
