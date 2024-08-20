import React from 'react'
import CTA from './CTA';
import './header.css';
import HeaderSocials from './HeaderSocials';
// import ME from '../../assets/img_me.png';

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Kiran Kumar Chittumoori</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src='' alt="" />
        </div>
        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default header
