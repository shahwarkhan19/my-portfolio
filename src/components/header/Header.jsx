import React from 'react'
import './header.css';
import CTA from './CTA.jsx';
import Social from './Social';
const Header = ({name,title,cv,linkedInLink,profileImage,gitHubLink,faceBookLink}) => {
  
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>{name}</h1>
        <h5 className="text-light">{title}</h5>
        <CTA cv={cv}/>
        <Social linkedInLink={linkedInLink} gitHubLink={gitHubLink} faceBookLink={faceBookLink}/>
        <div className="me">
          <img src={profileImage} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header