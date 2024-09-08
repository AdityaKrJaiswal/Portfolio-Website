import React from 'react'
import { FaLinkedin,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center items-center py-10 space-x-2 container max-w-screen-xl mx-auto  px-4 md:px-20">
        <a  href="https://www.linkedin.com/in/aditya-kumar-jaiswal-4a986b257/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='w-10 h-10' />
        </a>
        <a href="https://www.instagram.com/adityagupta14/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='w-10 h-10' />
        </a>
      </div>
    </footer>
  )
}

export default Footer