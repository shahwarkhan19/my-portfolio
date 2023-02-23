import React from 'react'
import './portfolio.css';

const Portfolio = ({portfolio}) => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          portfolio.map((curElem, index) => {
            return(
              <article className="portfolio__item" key={index}>
                <div className="portfolio__item_image">
                  <img src={curElem.portfolioImage} alt="" />
                </div>
                <h3>{curElem.portfolioTitle}</h3>
                <div className='portfolio__item_cta'>
                  <a href={curElem.portfolioGithub} className='btn'>Github</a>
                  <a href={curElem.portfolioLive} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio