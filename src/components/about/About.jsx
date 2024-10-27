import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <small>2.5+ years</small>
            </article>
            <article className="about__card">
            <TbUsers className="about__icon"/>
            <h5>Clients</h5>
            <small>20+</small>
            </article>
            
            <article className="about__card">
            <VscFolderLibrary className="about__icon"/>
            <h5>Projects</h5>
            <small>10+ Completed</small>
            </article>
            

          </div>
          <p>I am a skilled Full Stack Developer with over 2+ years of professional expperience, currently working in a leading multinational corporation (MNC) in India.
            My expertise spans both backend and frontend development, allowing me to build robust and scalable web applications.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        
        </div>
      </div>
    
    </section>
  )
}

export default about
