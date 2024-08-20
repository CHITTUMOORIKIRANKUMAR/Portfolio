import React from 'react'
import './footer.css';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer>
      <a href="#"className='footer__logo'>CHITTUMOORI KIRAN KUMAR</a>
      <ul className='permalinks'>
        <li> <a href="#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#experience">Experience</a></li>
        <li> <a href="#services">Services</a></li>
        <li> <a href="#portfolio">Portfolio</a></li>
        <li> <a href="#testimonials">Testimonials</a></li>
        <li> <a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/chittumoori-kiran-kumar-38557117b/" target='_blank'><FaLinkedin/></a>
        <a href="https://github.com/CHITTUMOORIKIRANKUMAR" target='_blank'><FaGithub/></a>
        <a href="https://instagram.com/its_ur_mr.kk" target='_blank'><FaInstagram/></a>
        
      </div>
      <div className="footer__copyright">
        <small>&copy; chittimurikirankumar.com.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
