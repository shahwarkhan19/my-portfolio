import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
// import Experience from './components/experience/Experience'

import Services from './components/services/Services'
import portfolioData from './data/portfolioData';
import Experience from './components/experience/Experience';
const App = () => {
  const {
    name,
    title,
    profileImage,
    cv,
    linkedInLink,
    gitHubLink,
    faceBookLink,
    instagramLink,
    twitterLink,
    aboutImage,
    aboutDescription,
    experience,
    clients,
    projects,
    frontendSkills,
    backendSkills,
    services,
    portfolio,
    testimonial,
    messenger,
    gmail,
    whatsapp,
    experienceSkills
  } = portfolioData;
  return (
    <>
        <Header name={name} title={title} profileImage={profileImage} cv={cv} linkedInLink={linkedInLink} gitHubLink={gitHubLink} faceBookLink={faceBookLink} />
        <Nav/>
        <About aboutImage={aboutImage} aboutDescription={aboutDescription} experience={experience} clients={clients} projects={projects}/>
        <Skills frontendSkills={frontendSkills} backendSkills={backendSkills}/>
        <Experience experienceSkills={experienceSkills}/>
        <Services services={services}/>
        <Portfolio portfolio={portfolio}/>
        <Testimonials testimonial={testimonial}/>
        <Contact messenger={messenger} gmail={gmail} whatsapp={whatsapp}/>
        <Footer faceBookLink={faceBookLink} instagramLink={instagramLink} twitterLink={twitterLink}/>
    </>
  )
}

export default App