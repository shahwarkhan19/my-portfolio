import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = ({aboutImage,aboutDescription,experience,clients,projects}) => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>{experience}</small>
            </article>
            <article className='about__card'>
              <FiUser className='about-icon'/>
              <h5>Clients</h5>
              <small>{clients}</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about-icon'/>
              <h5>Projects</h5>
              <small>{projects}</small>
            </article>
          </div>
          <p>{aboutDescription}</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      <h1></h1>
    </section>
  )
}

export default About