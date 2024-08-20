import React from 'react'
import './contact.css';

import { MdOutlineMail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  console.log('STarting....');
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_az64zeq', 'template_4n2qbof', form.current,'6gSYakAnJ2kKRiW8r')
      
      .then(
        () => {
          //console.log('SUCCESS!');
          alert("Thank you..!!")
          form.current.reset();
        },
        (error) => {
          alert("Something Wrong! Please Try again")
          //console.log('FAILED...', error.text);
        },
      );
    };
  

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
        <MdOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>chittimurikirankumar@gmail.com</h5>
          <a href="mailto:chittimurikirankumar@gmail.com" target='_blank'rel="noopener">Send a message</a>
        </article>
        {/* <article className="contact__option">
        <FaFacebookMessenger className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>kiran@gmail.com</h5>
          <a href="https://m.me/chittimurikirankumar"target='_blank'rel="noopener">Send a message</a>
        </article> */}
        <article className="contact__option">
        <FaWhatsapp className='contact__option-icon'/>
          <h4>Whats App</h4>
          <h5>+91 9542747630</h5>
          <a href="https://wa.me/9542747630" target='_blank'rel="noopener">Send a message</a>
        </article>
      </div>
      {/******************** */}
      <form ref={form} onSubmit={sendEmail} >
      {/*  */}
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows='7' placeholder='Your Message'></textarea>
        <button type='submit'value="Send" className='btn btn-primary'>Send Message</button>

      </form>
      </div>
    </section>
  )
}

export default Contact
