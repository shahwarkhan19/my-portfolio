import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = ({services}) => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
      {
              services.map((curSer,ind) => {
                return(
                  <article className="service" key={ind}>
                    <div className="service__head">
                      <h3>{curSer.serviceTitle}</h3>
                    </div>
                    <ul className="service__list">
                        
                        {
                          curSer.serviceLists.map((curList,index) => {
                            return(
                                  <li key={index}>
                                    <BiCheck className='service__list_icon'/>
                                    <p key={index}>{curList}</p>
                                  </li>
                            )
                          })
                        }
                    </ul>
                  </article>
                )
              })
            }
      </div>
    </section>
  )
}

export default Services