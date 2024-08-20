import React, { useState } from 'react'
import './nav.css';


import { IoMdHome } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri"; 
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav ==='#' ? 'active':''}><IoMdHome /></a>
      <a href="#about"onClick={()=> setActiveNav('#about')} className={activeNav ==='#about' ? 'active':''}><FaUserLarge /></a>
      <a href="#experience"onClick={()=> setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active':''}><BiBook /></a>
      <a href="#services"onClick={()=> setActiveNav('#services')} className={activeNav ==='#services' ? 'active':''}><RiServiceLine /></a>
      <a href="#contact"onClick={()=> setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active':''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
