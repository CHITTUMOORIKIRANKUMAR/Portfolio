import React from 'react'
import './testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'
//
//import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


///
const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" pagination={true} modules={[Pagination]}>
      <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One"/>
            </div>
            <h5 className='client__name'>Name</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam iste reiciendis ex inventore laborum quae ut sit optio recusandae.</small>
          
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One"/>
            </div>
            <h5 className='client__name'>Name</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam iste reiciendis ex inventore laborum quae ut sit optio recusandae.</small>
          
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One"/>
            </div>
            <h5 className='client__name'>Name</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam iste reiciendis ex inventore laborum quae ut sit optio recusandae.</small>
          
        </SwiperSlide>
      </Swiper>

    </section>
  )
}

export default Testimonial
