import React from 'react'
import  './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Skills = ({frontendSkills,backendSkills}) => {

  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {
              frontendSkills.map((curElem, ind) => {
                return(
                  <article className='experience__details' key={ind}>
                    <BsPatchCheckFill className='experience_details_icon'/>
                    <div>
                      <h4>{curElem.technology}</h4>
                      <small className='text-light'>{curElem.level}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {
              backendSkills.map((curElem,ind) => {
                return(
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience_details_icon'/>
                  <div>
                    <h4>{curElem.technology}</h4>
                    <small className='text-light'>{curElem.level}</small>
                  </div>
                </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
