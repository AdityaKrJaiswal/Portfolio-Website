import React from 'react'
// import photo from '../assets/Images/photo1.jpg'
import { Link } from 'react-scroll'

const Home = () => {
  return (

  <>
    <div name="Home" className='container max-w-screen-xl mx-auto  px-4 md:px-20 mt-5' >
        <div className='flex flex-col md:flex-row '>
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 text-white'>
                <span className='text-xl'>Hello, I'm Aditya Jaiswal</span>
                <div className='flex gap-2 text-2xl md:text-4xl'>
                    <h1>I am a</h1>
                    <span className='text-red-500 font-bold '>Web Developer</span>
                </div>
                <br />
                <p className='text-sm md:text-lg text-justify md:pt-2'>passionate and creative web developer with expertise in frontend and backend development. I specialize in building dynamic and responsive websites using HTML, CSS, JavaScript, React, and Node.js, ensuring seamless user experiences across all devices.</p>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md'>
                    <Link to="Contact"
                        smooth={true}
                        duration={500}
                        offset={70}
                        activeclass="active"
                    >Contact me</Link>
                </button>
            </div>
            <div className='md:w-1/2 md:ml-48 md:mt-18 mt-8 order-1'>
                <img src="Images/photo1.jpg" alt="" className='md:w-[450px] md: h-[450px] md:rounded-full border-black md:shadow-md' />
            </div>
        </div>
    </div>
  </>
  ) 
}

export default Home 