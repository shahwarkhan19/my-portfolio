import React from 'react'
import './experience.css'
const Experience = ({experienceSkills}) => {
  return (
    <>
    <section id='experience'>
      <h5>What experience I have</h5>
      <center><h3 className='section-title'>My Experience</h3></center>
      <div className="wrapper">
        
        <div className="center-line">
        
        </div>
        {
          experienceSkills.map((curElem,ind) => {
            if(ind % 2 === 0){
              return(
                <div className="row row-1" key={ind}>
                  <section>
                    <i style={{color: '#fff'}} className="icon fas fa-star"></i>
                    <div className="details">
                      <span className="title">{curElem.experienceTitle}</span>
                      <span style={{fontSize: '14px'}}>{curElem.experienceDuration}</span>
                    </div>
                    <p style={{fontSize: '13px'}}>{curElem.experienceDescription}</p>
                    <div className="bottom" style={{display: 'flex', justifyContent: 'right'}}>
                      <i style={{fontSize: '13px'}}>- {curElem.experienceCompany}</i>
                    </div>
                  </section>
                </div>
              )
            }
            else{
              return(
                <div className="row row-2" key={ind}>
                  <section>
                    <i style={{color: '#fff'}} className="icon fas fa-star"></i>
                    <div className="details">
                      <span className="title">{curElem.experienceTitle}</span>
                      <span style={{fontSize: '14px'}}>{curElem.experienceDuration}</span>
                    </div>
                    <p style={{fontSize: '13px'}}>{curElem.experienceDescription}</p>
                    <div className="bottom" style={{display: 'flex', justifyContent: 'right'}}>
                      <i style={{fontSize: '13px'}}>- {curElem.experienceCompany}</i>
                    </div>
                  </section>
                </div>
              );
            }
          })
        }

        
        
      </div>
    </section>
    </>
        
  )
}

export default Experience