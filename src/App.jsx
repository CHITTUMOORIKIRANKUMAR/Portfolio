import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Testmonials from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testmonials />
      <Contact />
      <Footer />

    </>
  )
}

export default App
