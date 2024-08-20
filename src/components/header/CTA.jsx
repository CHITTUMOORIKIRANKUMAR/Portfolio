import React from 'react';
// import CV from '../../assets/cv.pdf';

const CTA = () => {
  const handleClick =(event) =>{
    event.preventDefault();
    alert('Thankyou for showing interest on my resume, It will be updated soon..!!')
  }
  return (
    <div className='cta'>
        {/* <a href={CV} download className='btn'>Download CV</a> */}
        <a href="#" onClick={handleClick} className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
 
export default CTA
