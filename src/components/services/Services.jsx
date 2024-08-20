import React from 'react'
import './services.css'
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id ='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service_list-icon'/>
            <p>Unique designs with modern,responsive features.</p>
            </li>
            <li><BiCheck className='service_list-icon'/>
            <p>Dynamic UIs using HTML,CSS,JavaScript, and ReactJS.</p>
            </li>
            <li><BiCheck className='service_list-icon'/>
            <p>Robust server-side solutions with Node.js and databases like nosql or sql.</p>
            </li>
            <li><BiCheck className='service_list-icon'/>
            <p>Connect and enhance functionality with APIs.</p>
            </li>
            <li><BiCheck className='service_list-icon'/>
            <p>Improve load times and SEO.</p>
            </li>
          </ul>

        </article>
        {/**END */}
        <article className='service'>
          <div className="service__head">
            <h3>Maintenance & Support</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service_list-icon'/>
            <p>Resolve issues and errors promptly.</p>
            </li>
            <li><BiCheck className='service_list-icon'/>
            <p>Apply the latest features and security patches.</p>
            </li>
            <li><BiCheck className='service_list-icon'/>
            <p>Track and enhance application performance.</p>
            </li>
            <li><BiCheck className='service_list-icon'/>
            <p>Provide assistance for user and system issues.</p>
            </li>
            <li><BiCheck className='service_list-icon'/>
            <p>Ensure regular backups and data recovery.</p>
            </li>
          </ul>

        </article>
        {/* END */}
        <article className='service'>
          <div className="service__head">
            <h3>App Development</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service_list-icon'/>
            <p>Native or cross-platform apps for iOS and Android.</p>
            </li>
            <li><BiCheck className='service_list-icon'/>
            <p>User-friendly and visually appealing interfaces .</p>
            </li>
            <li><BiCheck className='service_list-icon'/>
            <p>Seamless connectivity with external services.</p>
            </li>
            <li><BiCheck className='service_list-icon'/>
            <p>Ensure reliability with thorough testing.</p>
            </li>
          </ul>

        </article>
        {/**END */}
        
        {/**END */}
      </div>

    </section>
  )
}

export default Services
