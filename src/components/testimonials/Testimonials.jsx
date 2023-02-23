import React from 'react'
import './testimonials.css'


import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = ({testimonial}) => {
  console.log(testimonial);
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          testimonial.map((curElem,ind) => {
            return(
                <SwiperSlide className="testimonial" key={ind}>
                  <div className="clients__avatar">
                    <img src={curElem.testimonialPicture} alt="testimonial" />
                  </div>
                  <h5 className='client__name'>{curElem.tetimonialName}</h5>
                  <small className='client__review'>
                    {curElem.testimonialReview}
                  </small>
                </SwiperSlide>
            )
          })
        }
        {/* <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={sufian} alt="testimonial" />
          </div>
          <h5 className='client__name'>Sufian Abbasi</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sapiente aspernatur odio. Rem saepe, facere, repellat obcaecati, itaque consequatur dolores tenetur natus reprehenderit ex ea nihil! Repellat quibusdam illum tempore.
          </small>
        </SwiperSlide> */}
      </Swiper>
    </section>
  )
}

export default Testimonials